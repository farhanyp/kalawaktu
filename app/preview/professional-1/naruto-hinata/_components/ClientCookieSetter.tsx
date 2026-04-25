"use client";

import { setCookie } from "@/app/_components/template-wedding-invitation/professional-1/utils";
import { useEffect } from "react";

type Props = {
  slug: string;
  name: string;
};

export default function ClientCookieSetter({ guest }: { guest: Props }) {
  useEffect(() => {
    if (guest && guest.slug) {
      setCookie("guest_slug", guest.slug, 30);
      setCookie("guest_name", guest.name, 30);
    }
  }, [guest]);

  return null;
}
