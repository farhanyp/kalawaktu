import { cache } from "react";
import type { ProfessionalOneTemplateData } from "@/app/_components/template-wedding-invitation/professional-1";
import { createServerSupabaseClient } from "@/lib/supabase-server";

const PREVIEW_SLUG = "naruto-hinata";

type ClientRow = {
  id: string;
  name: string;
  url: string;
};

type EventRow = {
  event_date: string;
  address_alias: string | null;
  detail_location: string | null;
};

function splitPartnerNames(clientName: string): [string, string] {
  const normalized = clientName.trim();
  const separators = /\s*(?:&|dan|and)\s*/i;
  const parts = normalized
    .split(separators)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length >= 2) {
    return [parts[0], parts[1]];
  }

  return [normalized, "Pasangan"];
}

function formatWeddingDateLabel(rawDate?: string | null) {
  if (!rawDate) {
    return "Tanggal akan diumumkan";
  }

  const eventDate = new Date(rawDate);

  if (Number.isNaN(eventDate.getTime())) {
    return "Tanggal akan diumumkan";
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(eventDate);
}

function buildTemplateData(client: ClientRow, event: EventRow | null): ProfessionalOneTemplateData {
  const [partnerOne, partnerTwo] = splitPartnerNames(client.name);
  const venueLabel = event?.address_alias ?? event?.detail_location ?? "Lokasi akan diumumkan";

  return {
    metadata: {
      title: `${partnerOne} & ${partnerTwo} | Kala Waktu`,
      description: `Undangan digital pernikahan untuk ${partnerOne} dan ${partnerTwo}.`,
    },
    invitation: {
      slug: client.url,
      brandName: "Kala Waktu",
      partnerOne,
      partnerTwo,
      weddingDateLabel: formatWeddingDateLabel(event?.event_date),
      venueLabel,
    },
    url: `/preview/professional-1/${client.url}/beranda`,
  };
}

function toTitleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function buildFallbackTemplateData(slug: string): ProfessionalOneTemplateData {
  const names = slug.split("-").map(toTitleCase).filter(Boolean);
  const partnerOne = names[0] ?? "Calon Mempelai";
  const partnerTwo = names[1] ?? "Pasangan";

  return {
    metadata: {
      title: `${partnerOne} & ${partnerTwo} | Kala Waktu`,
      description: `Undangan digital pernikahan untuk ${partnerOne} dan ${partnerTwo}.`,
    },
    invitation: {
      slug,
      brandName: "Kala Waktu",
      partnerOne,
      partnerTwo,
      weddingDateLabel: "Tanggal akan diumumkan",
      venueLabel: "Lokasi akan diumumkan",
    },
    url: `/preview/professional-1/${slug}/beranda`,
  };
}

export const getProfessionalOnePreviewData = cache(
  async (): Promise<ProfessionalOneTemplateData> => {
    const supabase = createServerSupabaseClient();

    const { data: client, error: clientError } = await supabase
      .from("clients")
      .select("id, name, url")
      .eq("url", PREVIEW_SLUG)
      .maybeSingle<ClientRow>();

    if (clientError) {
      console.error(`Failed to fetch client by url '${PREVIEW_SLUG}': ${clientError.message}`);
      return buildFallbackTemplateData(PREVIEW_SLUG);
    }

    console.log("client: ", client);

    if (!client) {
      return buildFallbackTemplateData(PREVIEW_SLUG);
    }

    const { data: event, error: eventError } = await supabase
      .from("events")
      .select("event_date, address_alias, detail_location")
      .eq("client_id", client.id)
      .order("event_date", { ascending: true })
      .limit(1)
      .maybeSingle<EventRow>();

    if (eventError) {
      console.error(`Failed to fetch event for client '${client.id}': ${eventError.message}`);
      return buildTemplateData(client, null);
    }

    return buildTemplateData(client, event);
  },
);
