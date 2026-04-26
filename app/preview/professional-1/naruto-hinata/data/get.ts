import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { PhotoRow, PreviewData } from "./types";
import { buildFallbackTemplateData, buildTemplateData, resolveClientByUrl } from "./utils";
import { DEFAULT_PREVIEW_SLUG as DEFAULT_SLUG } from "./types";
import { getEventByClientIdForLandingPage } from "./events/get";
import { getWishesByClientIdForLandingPage } from "./interactions/get";
import {
  getPhotosByClientIdForGallerySection,
  getPhotosByClientIdForHeroSection,
  getPhotosByClientIdForStorySection,
} from "./photos/get";

export const getProfessionalOnePreviewData = cache(
  async (clientUrl: string = DEFAULT_SLUG): Promise<PreviewData> => {
    try {
      const supabase = createServerSupabaseClient();
      const client = await resolveClientByUrl(supabase, clientUrl, { allowMissing: true });

      if (!client) {
        return buildFallbackTemplateData(clientUrl);
      }

      const [photos, story, hero, events, wishes] = await Promise.all([
        getPhotosByClientIdForGallerySection(client.id),
        getPhotosByClientIdForStorySection(client.id),
        getPhotosByClientIdForHeroSection(client.id),
        getEventByClientIdForLandingPage(client.id),
        getWishesByClientIdForLandingPage(client.id),
      ]);
      const heroPhoto = hero ?? (photos.length > 0 ? photos[0] : null);
      const storyPhoto = story ?? (photos.length > 0 ? photos[0] : null);

      return buildTemplateData(
        client,
        events,
        wishes,
        photos,
        heroPhoto as PhotoRow,
        storyPhoto as PhotoRow,
      );
    } catch (error) {
      console.error("Error fetching preview data:", error);
      return buildFallbackTemplateData(clientUrl);
    }
  },
);
