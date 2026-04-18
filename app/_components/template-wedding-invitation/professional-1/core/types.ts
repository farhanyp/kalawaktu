export type ProfessionalOneMetadata = {
  title: string;
  description: string;
};

export type ProfessionalOneEvent = {
  time: string;
  venue: string;
  description: string;
};

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
};

export type ProfessionalOneTemplateData = {
  metadata: ProfessionalOneMetadata;
  invitation: ProfessionalOneInvitationData;
  url: string;
};
