"use server";

import { createServerSupabaseClient } from "@/lib/supabase-server";

type InteractionWishRow = {
  id: string;
  name: string;
  message: string | null;
  absence: boolean | null;
  created_at?: string;
};

export async function getAllRsvpWishesByClientIdAction(clientId: string) {
  try {
    if (!clientId) {
      return { success: true, data: [] as InteractionWishRow[] };
    }

    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("interactions")
      .select("id, name, message, absence, created_at")
      .eq("client_id", clientId)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data: (data ?? []) as InteractionWishRow[] };
  } catch (error) {
    console.error("Error in getAllRsvpWishesByClientIdAction:", error);
    return { success: false, data: [] as InteractionWishRow[] };
  }
}

