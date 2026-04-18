import type { ProfessionalOneTemplateData } from "@/app/_components/template-wedding-invitation/professional-1";

export const DEFAULT_PREVIEW_SLUG = "naruto-hinata";

export type ClientRow = {
  id: string;
  name: string;
  url: string;
  created_at?: string;
  updated_at?: string;
};

export type EventRow = {
  id: string;
  client_id: string;
  name: string;
  type: string | null;
  event_date: string;
  url_map: string | null;
  address_alias: string | null;
  detail_location: string | null;
  created_at?: string;
  updated_at?: string;
};

export type PhotoRow = {
  id: number;
  client_id: string;
  name: string | null;
  url: string;
  created_at?: string;
  updated_at?: string;
};

export type MediaPaymentRow = {
  id: number;
  client_id: string;
  name: string;
  url_image: string | null;
  account_number: string;
  name_receiver: string;
  qr_code_url: string | null;
  created_at?: string;
  updated_at?: string;
};

export type InteractionRow = {
  id: string;
  client_id: string;
  name: string;
  message: string | null;
  absence: boolean | null;
  total_guest: number | null;
  is_confirmed: boolean | null;
  created_at?: string;
  updated_at?: string;
};

export type LoveStoryRow = {
  id: number;
  client_id: string;
  header: string;
  sub_header: string | null;
  detail: string | null;
  url_image: string | null;
  created_at?: string;
  updated_at?: string;
};

export type SettingRow = {
  id: number;
  client_id: string;
  bgm_url: string | null;
  is_music_autoplay: boolean | null;
  created_at?: string;
  updated_at?: string;
};

export type InvitationBundle = {
  client: ClientRow;
  events: EventRow[];
  photos: PhotoRow[];
  mediaPayments: MediaPaymentRow[];
  interactions: InteractionRow[];
  loveStories: LoveStoryRow[];
  settings: SettingRow | null;
};

export type ChildTableName =
  | "events"
  | "photos"
  | "media_payments"
  | "interactions"
  | "love_stories"
  | "settings";

export type ChildRowId = string | number;

export type CreateClientInput = {
  name: string;
  url?: string;
};

export type UpdateClientInput = {
  name?: string;
  url?: string;
};

export type CreateEventInput = Omit<EventRow, "id" | "client_id" | "created_at" | "updated_at">;
export type UpdateEventInput = Partial<CreateEventInput>;

export type CreatePhotoInput = Omit<PhotoRow, "id" | "client_id" | "created_at" | "updated_at">;
export type UpdatePhotoInput = Partial<CreatePhotoInput>;

export type CreateMediaPaymentInput = Omit<
  MediaPaymentRow,
  "id" | "client_id" | "created_at" | "updated_at"
>;
export type UpdateMediaPaymentInput = Partial<CreateMediaPaymentInput>;

export type CreateInteractionInput = Omit<
  InteractionRow,
  "id" | "client_id" | "created_at" | "updated_at"
>;
export type UpdateInteractionInput = Partial<CreateInteractionInput>;

export type CreateLoveStoryInput = Omit<
  LoveStoryRow,
  "id" | "client_id" | "created_at" | "updated_at"
>;
export type UpdateLoveStoryInput = Partial<CreateLoveStoryInput>;

export type CreateSettingInput = Omit<SettingRow, "id" | "client_id" | "created_at" | "updated_at">;
export type UpdateSettingInput = Partial<CreateSettingInput>;

export type PreviewData = ProfessionalOneTemplateData;
