import { ProfessionalOneLayout } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "./data/get";
import { DEFAULT_PREVIEW_SLUG } from "./data/types";

export default async function PreviewProfessional1BerandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getProfessionalOnePreviewData(DEFAULT_PREVIEW_SLUG);

  return (
    <ProfessionalOneLayout basePath={data.url} brandLabel={data.invitation.brandName}>
      {children}
    </ProfessionalOneLayout>
  );
}
