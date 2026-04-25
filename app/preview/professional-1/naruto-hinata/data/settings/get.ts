import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, SettingRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getSettingByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
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
