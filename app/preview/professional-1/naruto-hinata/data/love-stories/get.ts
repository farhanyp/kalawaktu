import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, LoveStoryRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getLoveStoriesByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
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
