import { ProfessionalOneGaleriPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "../../data";

export default async function PreviewProfessional1GaleriPage() {
  const data = await getProfessionalOnePreviewData();
  return <ProfessionalOneGaleriPage brandName={data.invitation.brandName} />;
}
