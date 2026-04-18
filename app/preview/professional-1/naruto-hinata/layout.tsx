import type { Metadata } from "next";
import { buildProfessionalOneMetadata } from "@/app/_components/template-wedding-invitation/professional-1";
import { professional_1TemplateData } from "./template-data";

export const metadata: Metadata = buildProfessionalOneMetadata(professional_1TemplateData.metadata);

export default function PreviewProfessional1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
