import { ProfessionalOneRsvpPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { getInteractionsByClientUrl } from "../data/interactions/get";
import { DEFAULT_PREVIEW_SLUG } from "../data/types";
import { getProfessionalOnePreviewData } from "../data/get";

export default async function PreviewProfessional1RsvpPage() {
  const [data, interactionData] = await Promise.all([
    getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG),
    getInteractionsByClientUrl(DEFAULT_PREVIEW_SLUG),
  ]);

  const interactions = interactionData.map((item) => ({
    id: item.id,
    name: item.name,
    message: item.message,
    totalGuest: item.total_guest,
    absence: item.absence,
    isConfirmed: item.is_confirmed,
    createdAt: item.created_at,
  }));

  return (
    <ProfessionalOneRsvpPage brandName={data.invitation.brandName} interactions={interactions} />
  );
}
