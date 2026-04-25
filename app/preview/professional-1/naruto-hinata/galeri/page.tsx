import { ProfessionalOneGaleriPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { getPhotosByClientUrl } from "../data/photos/get";
import { DEFAULT_PREVIEW_SLUG } from "../data/types";
import { getProfessionalOnePreviewData } from "../data/get";

export default async function PreviewProfessional1GaleriPage() {
  const [data, photoData] = await Promise.all([
    getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG),
    getPhotosByClientUrl(DEFAULT_PREVIEW_SLUG),
  ]);

  const photos = photoData.map((item) => ({
    id: item.id,
    name: item.name,
    url: item.url,
  }));

  return <ProfessionalOneGaleriPage brandName={data.invitation.brandName} photos={photos} />;
}
