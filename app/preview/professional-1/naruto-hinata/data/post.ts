import { createServerSupabaseClient } from "@/lib/supabase-server";
import type {
  ClientRow,
  CreateClientInput,
  CreateEventInput,
  CreateInteractionInput,
  CreateLoveStoryInput,
  CreateMediaPaymentInput,
  CreatePhotoInput,
  CreateSettingInput,
  EventRow,
  InteractionRow,
  LoveStoryRow,
  MediaPaymentRow,
  PhotoRow,
  SettingRow,
} from "./types";
import { resolveClientByUrl } from "./utils";
import { DEFAULT_PREVIEW_SLUG as DEFAULT_SLUG } from "./types";

export async function createClientByClientUrl(clientUrl: string, input: CreateClientInput) {
  const supabase = createServerSupabaseClient();
  const nextUrl = input.url ?? clientUrl;

  if (nextUrl !== clientUrl) {
    throw new Error("Client URL in payload must match the target clientUrl.");
  }

  const { data, error } = await supabase
    .from("clients")
    .insert({
      name: input.name,
      url: nextUrl,
    })
    .select("id, name, url, created_at, updated_at")
    .single<ClientRow>();

  if (error) {
    throw new Error(`Failed to create client for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function createEventByClientUrl(clientUrl: string, input: CreateEventInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("events")
    .insert({
      client_id: client.id,
      ...input,
    })
    .select(
      "id, client_id, name, type, event_date, url_map, address_alias, detail_location, created_at, updated_at",
    )
    .single<EventRow>();

  if (error) {
    throw new Error(`Failed to create event for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function createPhotoByClientUrl(clientUrl: string, input: CreatePhotoInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("photos")
    .insert({
      client_id: client.id,
      ...input,
    })
    .select("id, client_id, name, url, created_at, updated_at")
    .single<PhotoRow>();

  if (error) {
    throw new Error(`Failed to create photo for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function createMediaPaymentByClientUrl(
  clientUrl: string,
  input: CreateMediaPaymentInput,
) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("media_payments")
    .insert({
      client_id: client.id,
      ...input,
    })
    .select(
      "id, client_id, name, url_image, account_number, name_receiver, qr_code_url, created_at, updated_at",
    )
    .single<MediaPaymentRow>();

  if (error) {
    throw new Error(`Failed to create media payment for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function createInteractionByClientUrl(
  clientUrl: string = DEFAULT_SLUG,
  input: CreateInteractionInput,
) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("interactions")
    .insert({
      client_id: client.id,
      ...input,
      is_confirmed: true,
    })
    .select(
      "id, client_id, name, message, absence, total_guest, is_confirmed, created_at, updated_at",
    )
    .single<InteractionRow>();

  if (error) {
    throw new Error(`Failed to create interaction for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function createLoveStoryByClientUrl(clientUrl: string, input: CreateLoveStoryInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("love_stories")
    .insert({
      client_id: client.id,
      ...input,
    })
    .select("id, client_id, header, sub_header, detail, url_image, created_at, updated_at")
    .single<LoveStoryRow>();

  if (error) {
    throw new Error(`Failed to create love story for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function createSettingByClientUrl(clientUrl: string, input: CreateSettingInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("settings")
    .insert({
      client_id: client.id,
      ...input,
    })
    .select("id, client_id, bgm_url, is_music_autoplay, created_at, updated_at")
    .single<SettingRow>();

  if (error) {
    throw new Error(`Failed to create setting for '${clientUrl}': ${error.message}`);
  }

  return data;
}
