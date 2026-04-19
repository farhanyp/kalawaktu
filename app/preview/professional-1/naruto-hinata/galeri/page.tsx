import { ProfessionalOneGaleriPage } from "@/app/_components/template-wedding-invitation/professional-1";
import {
  DEFAULT_PREVIEW_SLUG,
  getInvitationBundleByClientUrl,
  getProfessionalOnePreviewData,
} from "../data";

export default async function PreviewProfessional1GaleriPage() {
  const [data, bundle] = await Promise.all([
    getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG),
    getInvitationBundleByClientUrl(DEFAULT_PREVIEW_SLUG),
  ]);

  const photos = bundle.photos.map((item) => ({
    id: item.id,
    name: item.name,
    url: item.url,
  }));

  return <ProfessionalOneGaleriPage brandName={data.invitation.brandName} photos={photos} />;
}
