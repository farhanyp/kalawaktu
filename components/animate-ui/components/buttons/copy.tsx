"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CopyButtonProps = {
  content: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
};

export function CopyButton({
  content,
  variant = "ghost",
  size = "sm",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 1400);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={async () => {
        await navigator.clipboard.writeText(content);
        setCopied(true);
      }}
      className={cn(
        "group relative gap-2 overflow-hidden text-xs font-bold uppercase tracking-widest text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/10 hover:text-secondary hover:shadow-[0_8px_24px_rgba(159,66,38,0.18)]",
        className,
      )}
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/0 via-secondary/15 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {copied ? (
        <Check size={14} className="animate-in zoom-in-50" />
      ) : (
        <Copy
          size={14}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        />
      )}
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        {copied ? "Tersalin" : "Salin Nomor"}
      </span>
    </Button>
  );
}
