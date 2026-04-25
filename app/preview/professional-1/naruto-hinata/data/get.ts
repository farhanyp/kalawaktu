import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { PreviewData } from "./types";
import { buildFallbackTemplateData, buildTemplateData, resolveClientByUrl } from "./utils";
import { DEFAULT_PREVIEW_SLUG as DEFAULT_SLUG } from "./types";

export const getProfessionalOnePreviewData = cache(
  async (clientUrl: string = DEFAULT_SLUG): Promise<PreviewData> => {
    try {
      const supabase = createServerSupabaseClient();
      const client = await resolveClientByUrl(supabase, clientUrl, { allowMissing: true });

      if (!client) {
        return buildFallbackTemplateData(clientUrl);
      }

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

      const { data: wish, error: wishError } = await supabase
        .from("interactions")
        .select(
          "id, client_id, name, message, absence, total_guest, is_confirmed, created_at, updated_at",
        )
        .eq("client_id", client.id)
        .order("created_at", { ascending: false });

      if (wishError) {
        console.error(`Failed to fetch event for client '${client.id}': ${wishError.message}`);
        return buildTemplateData(client, [], []);
      }

      return buildTemplateData(client, event, wish);
    } catch (error) {
      console.error(error);
      return buildFallbackTemplateData(clientUrl);
    }
  },
);
