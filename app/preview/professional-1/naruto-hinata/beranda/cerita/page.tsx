import { ProfessionalOneCeritaPage } from "@/app/_components/template-wedding-invitation/professional-1";
import {
  DEFAULT_PREVIEW_SLUG,
  getInvitationBundleByClientUrl,
  getProfessionalOnePreviewData,
} from "../../data";

export default async function PreviewProfessional1CeritaPage() {
  const [data, bundle] = await Promise.all([
    getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG),
    getInvitationBundleByClientUrl(DEFAULT_PREVIEW_SLUG),
  ]);

  const stories = bundle.loveStories.map((item) => ({
    id: item.id,
    header: item.header,
    subHeader: item.sub_header,
    detail: item.detail,
    urlImage: item.url_image,
  }));

  console.log("Page stories: ", stories);

  return (
    <ProfessionalOneCeritaPage
      basePath={data.url}
      brandName={data.invitation.brandName}
      stories={stories}
    />
  );
}
