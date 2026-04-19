import { ProfessionalOneLayout } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "./data";

export default async function PreviewProfessional1BerandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getProfessionalOnePreviewData();

  return (
    <ProfessionalOneLayout basePath={data.url} brandLabel={data.invitation.brandName}>
      {children}
    </ProfessionalOneLayout>
  );
}
