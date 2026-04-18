import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type {
  EventRow,
  InteractionRow,
  InvitationBundle,
  LoveStoryRow,
  MediaPaymentRow,
  PhotoRow,
  PreviewData,
  SettingRow,
} from "./types";
import { buildFallbackTemplateData, buildTemplateData, resolveClientByUrl } from "./utils";
import { DEFAULT_PREVIEW_SLUG as DEFAULT_SLUG } from "./types";

async function getEventsByClientId(clientId: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("events")
    .select(
      "id, client_id, name, type, event_date, url_map, address_alias, detail_location, created_at, updated_at",
    )
    .eq("client_id", clientId)
    .order("event_date", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch events for client '${clientId}': ${error.message}`);
  }

  return (data ?? []) as EventRow[];
}

export async function getClientByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  return resolveClientByUrl(supabase, clientUrl);
}

export async function getEventsByClientUrl(clientUrl: string) {
  const client = await getClientByClientUrl(clientUrl);
  return getEventsByClientId(client.id);
}

export async function getPhotosByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("photos")
    .select("id, client_id, name, url, created_at, updated_at")
    .eq("client_id", client.id)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch photos for client '${client.id}': ${error.message}`);
  }

  return (data ?? []) as PhotoRow[];
}

export async function getMediaPaymentsByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("media_payments")
    .select(
      "id, client_id, name, url_image, account_number, name_receiver, qr_code_url, created_at, updated_at",
    )
    .eq("client_id", client.id)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch media payments for client '${client.id}': ${error.message}`);
  }

  return (data ?? []) as MediaPaymentRow[];
}

export async function getInteractionsByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("interactions")
    .select(
      "id, client_id, name, message, absence, total_guest, is_confirmed, created_at, updated_at",
    )
    .eq("client_id", client.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch interactions for client '${client.id}': ${error.message}`);
  }

  return (data ?? []) as InteractionRow[];
}

export async function getLoveStoriesByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("love_stories")
    .select("id, client_id, header, sub_header, detail, url_image, created_at, updated_at")
    .eq("client_id", client.id)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch love stories for client '${client.id}': ${error.message}`);
  }

  return (data ?? []) as LoveStoryRow[];
}

export async function getSettingByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("settings")
    .select("id, client_id, bgm_url, is_music_autoplay, created_at, updated_at")
    .eq("client_id", client.id)
    .maybeSingle<SettingRow>();

  if (error) {
    throw new Error(`Failed to fetch setting for client '${client.id}': ${error.message}`);
  }

  return data;
}

export async function getInvitationBundleByClientUrl(clientUrl: string): Promise<InvitationBundle> {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);

  const [events, photos, mediaPayments, interactions, loveStories, settings] = await Promise.all([
    getEventsByClientId(client.id),
    getPhotosByClientUrl(clientUrl),
    getMediaPaymentsByClientUrl(clientUrl),
    getInteractionsByClientUrl(clientUrl),
    getLoveStoriesByClientUrl(clientUrl),
    getSettingByClientUrl(clientUrl),
  ]);

  return {
    client,
    events,
    photos,
    mediaPayments,
    interactions,
    loveStories,
    settings,
  };
}

export const getProfessionalOnePreviewData = cache(
  async (clientUrl: string = DEFAULT_SLUG): Promise<PreviewData> => {
    try {
      const supabase = createServerSupabaseClient();
      const client = await resolveClientByUrl(supabase, clientUrl, { allowMissing: true });

      if (!client) {
        return buildFallbackTemplateData(clientUrl);
      }

      const { data: event, error: eventError } = await supabase
        .from("events")
        .select(
          "id, client_id, name, type, event_date, url_map, address_alias, detail_location, created_at, updated_at",
        )
        .eq("client_id", client.id)
        .order("event_date", { ascending: true });

      if (eventError) {
        console.error(`Failed to fetch event for client '${client.id}': ${eventError.message}`);
        return buildTemplateData(client, []);
      }

      return buildTemplateData(client, event);
    } catch (error) {
      console.error(error);
      return buildFallbackTemplateData(clientUrl);
    }
  },
);
