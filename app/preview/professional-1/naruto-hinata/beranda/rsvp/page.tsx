import { ProfessionalOneRsvpPage } from "@/app/_components/template-wedding-invitation/professional-1";
import {
  DEFAULT_PREVIEW_SLUG,
  getInvitationBundleByClientUrl,
  getProfessionalOnePreviewData,
} from "../../data";

export default async function PreviewProfessional1RsvpPage() {
  const [data, bundle] = await Promise.all([
    getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG),
    getInvitationBundleByClientUrl(DEFAULT_PREVIEW_SLUG),
  ]);

  const interactions = bundle.interactions.map((item) => ({
    id: item.id,
    name: item.name,
    message: item.message,
    totalGuest: item.total_guest,
    absence: item.absence,
    isConfirmed: item.is_confirmed,
    createdAt: item.created_at,
  }));

  console.log("Page RSVP: ", interactions);

  return (
    <ProfessionalOneRsvpPage brandName={data.invitation.brandName} interactions={interactions} />
  );
}
