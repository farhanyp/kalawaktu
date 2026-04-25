import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { PreviewData } from "./types";
import { buildFallbackTemplateData, buildTemplateData, resolveClientByUrl } from "./utils";
import { DEFAULT_PREVIEW_SLUG as DEFAULT_SLUG } from "./types";
import { getEventByClientIdForLandingPage } from "./events/get";
import { getWishesByClientIdForLandingPage } from "./interactions/get";
import { getPhotosByClientIdForGalerrySection } from "./photos/get";

export const getProfessionalOnePreviewData = cache(
  async (clientUrl: string = DEFAULT_SLUG): Promise<PreviewData> => {
    try {
      const supabase = createServerSupabaseClient();
      const client = await resolveClientByUrl(supabase, clientUrl, { allowMissing: true });

      if (!client) {
        return buildFallbackTemplateData(clientUrl);
      }

      const photos = await getPhotosByClientIdForGalerrySection(client.id);
      const events = await getEventByClientIdForLandingPage(client.id);
      const wishes = await getWishesByClientIdForLandingPage(client.id);

      return buildTemplateData(client, events, wishes, photos);
    } catch (error) {
      console.error(error);
      return buildFallbackTemplateData(clientUrl);
    }
  },
);
