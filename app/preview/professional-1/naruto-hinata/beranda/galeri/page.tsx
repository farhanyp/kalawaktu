import { ProfessionalOneGaleriPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { professional_1TemplateData } from "../../template-data";

export default function PreviewProfessional1GaleriPage() {
  return <ProfessionalOneGaleriPage brandName={professional_1TemplateData.invitation.brandName} />;
}
