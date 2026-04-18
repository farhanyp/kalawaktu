import type { SupabaseClient } from "@supabase/supabase-js";
import {
  type PreviewData,
  type ChildRowId,
  type ChildTableName,
  type ClientRow,
  type EventRow,
  EVENT_TYPES,
  WishesRow,
} from "./types";
import { ProfessionalOneWish } from "@/app/_components/template-wedding-invitation/professional-1/core/types";

export function splitPartnerNames(clientName: string): [string, string] {
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

export function formatDateLabel(rawDate?: string | null) {
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

export function buildTemplateData(
  client: ClientRow,
  events: EventRow[] = [],
  wishes: WishesRow[] = [],
): PreviewData {
  const akadEvent = events.find((e) => e.type?.toUpperCase() === EVENT_TYPES.AKAD);
  const resepsiEvent = events.find((e) => e.type?.toUpperCase() === EVENT_TYPES.RESEPSI);

  const mainEvent = resepsiEvent ?? akadEvent;
  const venueLabel =
    mainEvent?.address_alias ?? mainEvent?.detail_location ?? "Lokasi akan diumumkan";

  const [partnerOne, partnerTwo] = splitPartnerNames(client.name);

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
      weddingDateLabel: formatDateLabel(resepsiEvent?.event_date),
      venueLabel,
      events: {
        akad: {
          time: formatDateLabel(akadEvent?.event_date), // Aman meskipun akadEvent undefined
          venue: akadEvent?.detail_location ?? "Lokasi Akad Nikah",
          description: "Keluarga Inti & Kerabat Dekat",
        },
        resepsi: {
          time: formatDateLabel(resepsiEvent?.event_date), // Aman meskipun akadEvent undefined
          venue: resepsiEvent?.detail_location ?? "Lokasi Akad Nikah",
          description: "Keluarga Inti & Kerabat Dekat",
        },
        location: {
          address: resepsiEvent?.detail_location ?? "Lokasi Akad Nikah",
          googleMapsUrl: resepsiEvent?.url_map ?? "Lokasi Akad Nikah",
        },
      },
      wishes: wishes.map((item) => ({
        id: item.id,
        initial: item.name ? item.name.charAt(0).toUpperCase() : "?",
        name: item.name || "Tamu Undangan",
        timeLabel: item.created_at ? item.created_at : "Baru saja",
        message: item.message ?? "",
        tone: item.absence ? "default" : "primary",
        align: "left",
      })),
    },
    url: `/preview/professional-1/${client.url}/beranda`,
  };
}

function toTitleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function buildFallbackTemplateData(slug: string): PreviewData {
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
      events: {
        akad: {
          time: formatDateLabel(null), // Aman meskipun akadEvent undefined
          venue: "Lokasi Akad Nikah",
          description: "Keluarga Inti & Kerabat Dekat",
        },
        resepsi: {
          time: formatDateLabel(null), // Aman meskipun akadEvent undefined
          venue: "Lokasi Akad Nikah",
          description: "Keluarga Inti & Kerabat Dekat",
        },
        location: {
          address: "Lokasi Akad Nikah",
          googleMapsUrl: "Lokasi Akad Nikah",
        },
      },
      wishes: [
        {
          id: "default-id",
          initial: "tidak diketahui",
          name: "Tamu Undangan",
          timeLabel: "tidak diketahui",
          message: "",
          tone: "default",
          align: "left",
        },
      ] as ProfessionalOneWish[],
    },
    url: `/preview/professional-1/${slug}/beranda`,
  };
}

export async function resolveClientByUrl(
  supabase: SupabaseClient,
  clientUrl: string,
  options: { allowMissing: true },
): Promise<ClientRow | null>;
export async function resolveClientByUrl(
  supabase: SupabaseClient,
  clientUrl: string,
  options?: { allowMissing?: false },
): Promise<ClientRow>;
export async function resolveClientByUrl(
  supabase: SupabaseClient,
  clientUrl: string,
  options?: { allowMissing?: boolean },
) {
  const { data, error } = await supabase
    .from("clients")
    .select("id, name, url, created_at, updated_at")
    .eq("url", clientUrl)
    .maybeSingle<ClientRow>();

  if (error) {
    throw new Error(`Failed to resolve client by url '${clientUrl}': ${error.message}`);
  }

  if (!data && !options?.allowMissing) {
    throw new Error(`Client with url '${clientUrl}' was not found.`);
  }

  return data as ClientRow | null;
}

export async function assertChildRowOwnership(
  supabase: SupabaseClient,
  table: ChildTableName,
  id: ChildRowId,
  clientId: string,
) {
  const { data, error } = await supabase
    .from(table)
    .select("client_id")
    .eq("id", id)
    .maybeSingle<{ client_id: string | null }>();

  if (error) {
    throw new Error(
      `Failed to validate ownership in table '${table}' for row '${id}': ${error.message}`,
    );
  }

  if (!data) {
    throw new Error(`Row '${id}' in table '${table}' was not found.`);
  }

  if (data.client_id !== clientId) {
    throw new Error(`Row '${id}' in table '${table}' does not belong to the requested client.`);
  }
}
