import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG } from "../types";
import { buildTemplateData, resolveClientByUrl } from "../utils";

export async function getsEventByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data: event, error: eventError } = await supabase
    .from("events")
    .select(
      "id, client_id, name, type, event_date, url_map, address_alias, detail_location, created_at, updated_at",
    )
    .eq("client_id", client.id)
    .order("event_date", { ascending: true });

  if (eventError) {
    console.error(`Failed to fetch event for client '${client.id}': ${eventError.message}`);
    return buildTemplateData(client, [], []);
  }

  return event ?? [];
}

export async function getEventByClientIdForLandingPage(client_id: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("events")
    .select(
      "id, client_id, name, type, event_date, url_map, address_alias, detail_location, created_at, updated_at",
    )
    .eq("client_id", client_id)
    .order("event_date", { ascending: true });

  if (error) throw error;

  return data ?? [];
}
