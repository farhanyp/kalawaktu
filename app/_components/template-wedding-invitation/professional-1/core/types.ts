export type ProfessionalOneMetadata = {
  title: string;
  description: string;
};

export type ProfessionalOneEvent = {
  time: string;
  venue: string;
  description: string;
};

export type AttendanceStatus = "hadir" | "ragu-ragu" | "tidak-hadir";

export type GuestCount = "1" | "2";

export type WishTone = "default" | "primary" | "tertiary";

export type WishAlign = "left" | "right";

export interface ProfessionalOneRsvpFormData {
  name: string;
  guestCount: GuestCount;
  attendance: AttendanceStatus;
  message: string;
}

export interface ProfessionalOneWish {
  id: string;
  initial: string;
  name: string;
  timeLabel: string;
  message: string;
  tone: WishTone;
  align: WishAlign;
}

export type ProfessionalOneInvitationData = {
  slug: string;
  brandName: string;
  partnerOne: string;
  partnerTwo: string;
  weddingDateLabel: string;
  venueLabel: string;
  events: {
    akad: ProfessionalOneEvent;
    resepsi: ProfessionalOneEvent;
    location: {
      address: string;
      googleMapsUrl: string;
    };
  };
  wishes: ProfessionalOneWish[];
};

export type ProfessionalOneTemplateData = {
  metadata: ProfessionalOneMetadata;
  invitation: ProfessionalOneInvitationData;
  url: string;
};
