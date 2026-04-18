import { ProfessionalOneCeritaPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraBerandaCeritaPage() {
  return (
    <ProfessionalOneCeritaPage
      basePath={siddiqTiaraTemplateData.url}
      brandName={siddiqTiaraTemplateData.invitation.brandName}
    />
  );
}
