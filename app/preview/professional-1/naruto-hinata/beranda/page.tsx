import { ProfessionalOneLandingPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "../data";

export default async function PreviewProfessional1BerandaPage() {
  const data = await getProfessionalOnePreviewData();
  return <ProfessionalOneLandingPage basePath={data.url} invitation={data.invitation} />;
}
