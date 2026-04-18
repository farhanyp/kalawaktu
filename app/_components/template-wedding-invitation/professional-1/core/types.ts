export type ProfessionalOneMetadata = {
  title: string;
  description: string;
};

export type ProfessionalOneInvitationData = {
  slug: string;
  brandName: string;
  partnerOne: string;
  partnerTwo: string;
  weddingDateLabel: string;
  venueLabel: string;
};

export type ProfessionalOneTemplateData = {
  metadata: ProfessionalOneMetadata;
  invitation: ProfessionalOneInvitationData;
  url: string;
};
