import { InvitationGate } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "./data";

export default async function PreviewProfessional1Page() {
  const data = await getProfessionalOnePreviewData();
  return <InvitationGate data={data} />;
}
