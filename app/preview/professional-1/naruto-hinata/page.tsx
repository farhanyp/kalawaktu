export const runtime = "edge";
export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import { InvitationNotFoundView } from "@/app/invitation/_components/invitation-not-found";
import { getProfessionalOnePreviewData, getGuestBySlug } from "./data";
import { ProfessionalOneLandingPage } from "@/app/_components/template-wedding-invitation/professional-1";
import ClientCookieSetter from "./_components/ClientCookieSetter";

export default async function PreviewProfessional1BerandaPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const urlGuest = typeof searchParams.guest === "string" ? searchParams.guest : null;

  const cookieStore = await cookies();
  const sessionGuest = cookieStore.get("guest_slug")?.value;

  const activeGuestSlug = urlGuest || sessionGuest;

  if (!activeGuestSlug) {
    return <InvitationNotFoundView />;
  }

  const data = await getProfessionalOnePreviewData();
  if (!data.invitation) return <InvitationNotFoundView />;

  const guestData = await getGuestBySlug(data.invitation.client_id, activeGuestSlug);

  if (!guestData) {
    return <InvitationNotFoundView />;
  }

  return (
    <>
      <ClientCookieSetter guest={guestData} />
      <ProfessionalOneLandingPage
        basePath={data.url}
        invitation={data.invitation}
        guest={guestData}
      />
    </>
  );
}
