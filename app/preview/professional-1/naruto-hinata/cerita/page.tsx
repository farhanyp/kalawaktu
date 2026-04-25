import { ProfessionalOneCeritaPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { getLoveStoriesByClientUrl } from "../data/love-stories/get";
import { DEFAULT_PREVIEW_SLUG } from "../data/types";
import { getProfessionalOnePreviewData } from "../data/get";

export default async function PreviewProfessional1CeritaPage() {
  const [data, storiesData] = await Promise.all([
    getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG),
    getLoveStoriesByClientUrl(DEFAULT_PREVIEW_SLUG),
  ]);

  const stories = storiesData.map((item) => ({
    id: item.id,
    header: item.header,
    subHeader: item.sub_header,
    detail: item.detail,
    urlImage: item.url_image,
  }));

  return (
    <ProfessionalOneCeritaPage
      basePath={data.url}
      brandName={data.invitation.brandName}
      stories={stories}
    />
  );
}
