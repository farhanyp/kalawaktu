import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, PhotoRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getPhotosByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
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

export async function getPhotosByClientIdForGalerrySection(client_id: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("photos")
    .select("id, client_id, name, url, created_at, updated_at")
    .eq("client_id", client_id)
    .order("id", { ascending: true })
    .limit(4);

  if (error) {
    throw new Error(`Failed to fetch photos for client '${client_id}': ${error.message}`);
  }

  return (data ?? []) as PhotoRow[];
}
