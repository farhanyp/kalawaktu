import { ProfessionalOneCeritaPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { professional_1TemplateData } from "../../template-data";

export default function PreviewProfessional1CeritaPage() {
  return (
    <ProfessionalOneCeritaPage
      basePath={professional_1TemplateData.url}
      brandName={professional_1TemplateData.invitation.brandName}
    />
  );
}
