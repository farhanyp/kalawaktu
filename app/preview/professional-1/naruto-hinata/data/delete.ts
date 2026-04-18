import { createServerSupabaseClient } from "@/lib/supabase-server";
import { assertChildRowOwnership, resolveClientByUrl } from "./utils";

export async function deleteClientByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  await resolveClientByUrl(supabase, clientUrl);

  const { error } = await supabase.from("clients").delete().eq("url", clientUrl);

  if (error) {
    throw new Error(`Failed to delete client '${clientUrl}': ${error.message}`);
  }
}

export async function deleteEventByClientUrl(clientUrl: string, id: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "events", id, client.id);

  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete event '${id}' for '${clientUrl}': ${error.message}`);
  }
}

export async function deletePhotoByClientUrl(clientUrl: string, id: number) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "photos", id, client.id);

  const { error } = await supabase.from("photos").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete photo '${id}' for '${clientUrl}': ${error.message}`);
  }
}

export async function deleteMediaPaymentByClientUrl(clientUrl: string, id: number) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "media_payments", id, client.id);

  const { error } = await supabase.from("media_payments").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete media payment '${id}' for '${clientUrl}': ${error.message}`);
  }
}

export async function deleteInteractionByClientUrl(clientUrl: string, id: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "interactions", id, client.id);

  const { error } = await supabase.from("interactions").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete interaction '${id}' for '${clientUrl}': ${error.message}`);
  }
}

export async function deleteLoveStoryByClientUrl(clientUrl: string, id: number) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "love_stories", id, client.id);

  const { error } = await supabase.from("love_stories").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete love story '${id}' for '${clientUrl}': ${error.message}`);
  }
}

export async function deleteSettingByClientUrl(clientUrl: string, id: number) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "settings", id, client.id);

  const { error } = await supabase.from("settings").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete setting '${id}' for '${clientUrl}': ${error.message}`);
  }
}
