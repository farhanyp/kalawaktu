import { createServerSupabaseClient } from "@/lib/supabase-server";
import { resolveClientByUrl } from "../utils";

export async function deleteClientByClientUrl(clientUrl: string) {
  const supabase = createServerSupabaseClient();
  await resolveClientByUrl(supabase, clientUrl);

  const { error } = await supabase.from("clients").delete().eq("url", clientUrl);

  if (error) {
    throw new Error(`Failed to delete client '${clientUrl}': ${error.message}`);
  }
}
