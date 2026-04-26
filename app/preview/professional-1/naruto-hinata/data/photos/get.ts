import { createServerSupabaseClient } from "@/lib/supabase-server";
import { DEFAULT_PREVIEW_SLUG, PhotoRow } from "../types";
import { resolveClientByUrl } from "../utils";

export async function getPhotosByClientUrl(
  clientUrl: string = DEFAULT_PREVIEW_SLUG,
): Promise<PhotoRow[]> {
  const supabase = createServerSupabaseClient();
  const client = await resolveClientByUrl(supabase, clientUrl);
  const { data, error } = await supabase
    .from("photos")
    .select("id, client_id, name, url, created_at, updated_at")
    .eq("client_id", client.id)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch photos for client '${client.id}': ${error.message}`);
  }

  return data;
}

export async function getPhotosByClientIdForGallerySection(client_id: string): Promise<PhotoRow[]> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("photos")
    .select("id, client_id, name, url, created_at, updated_at")
    .eq("client_id", client_id)
    .order("id", { ascending: true })
    .limit(4);

  if (error) {
    throw new Error(`Failed to fetch photos for client '${client_id}': ${error.message}`);
  }

  return data;
}

export async function getPhotosByClientIdForHeroSection(
  client_id: string,
): Promise<PhotoRow | null> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("photos")
    .select("id, client_id, name, url, type_section, created_at, updated_at")
    .eq("client_id", client_id)
    .eq("type_section", "HERO")
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch hero photo for client '${client_id}': ${error.message}`);
  }

  return data as PhotoRow | null;
}

export async function getPhotosByClientIdForStorySection(
  client_id: string,
): Promise<PhotoRow | null> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("photos")
    .select("id, client_id, name, url, type_section, created_at, updated_at")
    .eq("client_id", client_id)
    .eq("type_section", "STORY")
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch hero photo for client '${client_id}': ${error.message}`);
  }

  return data as PhotoRow | null;
}
