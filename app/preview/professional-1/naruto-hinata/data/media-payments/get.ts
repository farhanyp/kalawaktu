import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, MediaPaymentRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getMediaPaymentsByClientUrl(clientUrl: string = DEFAULT_PREVIEW_SLUG) {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("media_payments")
    .select(
      "id, client_id, name, url_image, account_number, name_receiver, qr_code_url, created_at, updated_at",
    )
    .eq("client_id", client.id)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch media payments for client '${client.id}': ${error.message}`);
  }

  return (data ?? []) as MediaPaymentRow[];
}
