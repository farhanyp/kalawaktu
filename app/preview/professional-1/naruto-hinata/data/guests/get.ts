import { createServerSupabaseClient } from "@/lib/supabase-server";

export async function getGuestBySlug(clientId: string, guestSlug: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("guests")
    .select("id, client_id, name, slug, is_opened")
    .eq("client_id", clientId)
    .eq("slug", guestSlug)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching guest: ${error.message}`);
    return null;
  }

  return data;
}
