import { ProfessionalOneGaleriPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraBerandaGaleriPage() {
  return (
    <ProfessionalOneGaleriPage
      brandName={siddiqTiaraTemplateData.invitation.brandName}
    />
  );
}
