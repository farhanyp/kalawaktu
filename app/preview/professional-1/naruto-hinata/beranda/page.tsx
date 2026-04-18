import { ProfessionalOneLandingPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { professional_1TemplateData } from "../template-data";

export default function SiddiqTiaraBerandaPage() {
  return (
    <ProfessionalOneLandingPage
      basePath={professional_1TemplateData.url}
      invitation={professional_1TemplateData.invitation}
    />
  );
}
