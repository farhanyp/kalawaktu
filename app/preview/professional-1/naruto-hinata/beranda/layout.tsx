import { ProfessionalOneLayout } from "@/app/_components/template-wedding-invitation/professional-1";
import { professional_1TemplateData } from "../template-data";

export default function PreviewProfessional1BerandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProfessionalOneLayout
      basePath={professional_1TemplateData.url}
      brandLabel={professional_1TemplateData.invitation.brandName}
    >
      {children}
    </ProfessionalOneLayout>
  );
}
