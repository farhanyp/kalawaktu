import { ProfessionalOneLandingPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraBerandaPage() {
  return (
    <ProfessionalOneLandingPage
      basePath={siddiqTiaraTemplateData.url}
      invitation={siddiqTiaraTemplateData.invitation}
    />
  );
}
