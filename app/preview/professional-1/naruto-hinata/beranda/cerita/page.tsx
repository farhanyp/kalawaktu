import { ProfessionalOneCeritaPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "../../data";

export default async function PreviewProfessional1CeritaPage() {
  const data = await getProfessionalOnePreviewData();
  return <ProfessionalOneCeritaPage basePath={data.url} brandName={data.invitation.brandName} />;
}
