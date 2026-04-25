import { createServerSupabaseClient } from "@/lib/supabase-server";
import { CreateInteractionInput, DEFAULT_PREVIEW_SLUG, InteractionRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function createInteractionByClientUrl(
  clientUrl: string = DEFAULT_PREVIEW_SLUG,
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
