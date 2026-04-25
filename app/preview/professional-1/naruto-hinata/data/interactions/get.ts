import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, InteractionRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getInteractionsByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
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

export async function getWishesByClientIdForLandingPage(client_id: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("interactions")
    .select(
      "id, client_id, name, message, absence, total_guest, is_confirmed, created_at, updated_at",
    )
    .eq("client_id", client_id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}
