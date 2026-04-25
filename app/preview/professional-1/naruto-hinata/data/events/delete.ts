import { createServerSupabaseClient } from "@/lib/supabase-server";
import { assertChildRowOwnership, resolveClientByUrl } from "../utils";

export async function deleteEventByClientUrl(clientUrl: string, id: string) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  await assertChildRowOwnership(supabase, "events", id, client.id);

  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete event '${id}' for '${clientUrl}': ${error.message}`);
  }
}
