import { ProfessionalOneLayout } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraBerandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProfessionalOneLayout
      basePath={siddiqTiaraTemplateData.url}
      brandLabel={siddiqTiaraTemplateData.invitation.brandName}
    >
      {children}
    </ProfessionalOneLayout>
  );
}
