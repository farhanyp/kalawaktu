import type { Metadata } from "next";
import { buildProfessionalOneMetadata } from "@/app/_components/template-wedding-invitation/professional-1";
import { getProfessionalOnePreviewData } from "./data";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getProfessionalOnePreviewData();
  return buildProfessionalOneMetadata(data.metadata);
}

export default function PreviewProfessional1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
