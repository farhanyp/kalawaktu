import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, EventRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getClientByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
  const supabase = createServerSupabaseClient();
  return resolveClientByUrl(supabase, clientUrl);
}

export async function getEventsByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
  const client = await getClientByClientUrl(clientUrl);
  return getEventsByClientId(client.id);
}

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
