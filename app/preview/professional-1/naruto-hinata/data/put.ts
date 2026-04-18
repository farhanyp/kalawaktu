import { createServerSupabaseClient } from "@/lib/supabase-server";
import type {
  ClientRow,
  EventRow,
  InteractionRow,
  LoveStoryRow,
  MediaPaymentRow,
  PhotoRow,
  SettingRow,
  UpdateClientInput,
  UpdateEventInput,
  UpdateInteractionInput,
  UpdateLoveStoryInput,
  UpdateMediaPaymentInput,
  UpdatePhotoInput,
  UpdateSettingInput,
} from "./types";
import { assertChildRowOwnership, resolveClientByUrl } from "./utils";

export async function updateClientByClientUrl(clientUrl: string, input: UpdateClientInput) {
  const supabase = createServerSupabaseClient();
  await resolveClientByUrl(supabase, clientUrl);

  const { data, error } = await supabase
    .from("clients")
    .update(input)
    .eq("url", clientUrl)
    .select("id, name, url, created_at, updated_at")
    .single<ClientRow>();

  if (error) {
    throw new Error(`Failed to update client '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function updateEventByClientUrl(clientUrl: string, id: string, input: UpdateEventInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "events", id, client.id);

  const { data, error } = await supabase
    .from("events")
    .update(input)
    .eq("id", id)
    .select("id, client_id, name, type, event_date, url_map, address_alias, detail_location, created_at, updated_at")
    .single<EventRow>();

  if (error) {
    throw new Error(`Failed to update event '${id}' for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function updatePhotoByClientUrl(clientUrl: string, id: number, input: UpdatePhotoInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "photos", id, client.id);

  const { data, error } = await supabase
    .from("photos")
    .update(input)
    .eq("id", id)
    .select("id, client_id, name, url, created_at, updated_at")
    .single<PhotoRow>();

  if (error) {
    throw new Error(`Failed to update photo '${id}' for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function updateMediaPaymentByClientUrl(
  clientUrl: string,
  id: number,
  input: UpdateMediaPaymentInput,
) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "media_payments", id, client.id);

  const { data, error } = await supabase
    .from("media_payments")
    .update(input)
    .eq("id", id)
    .select("id, client_id, name, url_image, account_number, name_receiver, qr_code_url, created_at, updated_at")
    .single<MediaPaymentRow>();

  if (error) {
    throw new Error(`Failed to update media payment '${id}' for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function updateInteractionByClientUrl(
  clientUrl: string,
  id: string,
  input: UpdateInteractionInput,
) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "interactions", id, client.id);

  const { data, error } = await supabase
    .from("interactions")
    .update(input)
    .eq("id", id)
    .select("id, client_id, name, message, absence, total_guest, is_confirmed, created_at, updated_at")
    .single<InteractionRow>();

  if (error) {
    throw new Error(`Failed to update interaction '${id}' for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function updateLoveStoryByClientUrl(
  clientUrl: string,
  id: number,
  input: UpdateLoveStoryInput,
) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "love_stories", id, client.id);

  const { data, error } = await supabase
    .from("love_stories")
    .update(input)
    .eq("id", id)
    .select("id, client_id, header, sub_header, detail, url_image, created_at, updated_at")
    .single<LoveStoryRow>();

  if (error) {
    throw new Error(`Failed to update love story '${id}' for '${clientUrl}': ${error.message}`);
  }

  return data;
}

export async function updateSettingByClientUrl(clientUrl: string, id: number, input: UpdateSettingInput) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "settings", id, client.id);

  const { data, error } = await supabase
    .from("settings")
    .update(input)
    .eq("id", id)
    .select("id, client_id, bgm_url, is_music_autoplay, created_at, updated_at")
    .single<SettingRow>();

  if (error) {
    throw new Error(`Failed to update setting '${id}' for '${clientUrl}': ${error.message}`);
  }

  return data;
}
