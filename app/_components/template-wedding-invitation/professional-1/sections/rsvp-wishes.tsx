"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getAllRsvpWishesByClientIdAction } from "../actions/rsvp-wishes-action";
import { ProfessionalOneWish } from "../core/types";
import { formatFriendlyDate } from "../utils";

interface RsvpWishesProps {
  wishes: ProfessionalOneWish[];
  clientId?: string;
}

function toWish(row: {
  id: string;
  name: string;
  message: string | null;
  absence: boolean | null;
  created_at?: string;
}): ProfessionalOneWish {
  return {
    id: row.id,
    initial: row.name ? row.name.charAt(0).toUpperCase() : "?",
    name: row.name || "Tamu Undangan",
    timeLabel: row.created_at || "Baru saja",
    message: row.message ?? "Terima kasih atas doa dan restunya.",
    tone: row.absence ? "default" : "primary",
    align: "left",
  };
}

export function ProfessionalOneRsvpWishes({ wishes, clientId }: RsvpWishesProps) {
  const [allWishes, setAllWishes] = useState<ProfessionalOneWish[]>(wishes);

  useEffect(() => {
    setAllWishes(wishes);
  }, [wishes]);

  useEffect(() => {
    let isCancelled = false;

    async function getAllWishes() {
      if (!clientId) return;

      const result = await getAllRsvpWishesByClientIdAction(clientId);
      if (!result.success) return;

      const alignMap = new Map(wishes.map((wish) => [wish.id, wish.align]));
      const mappedWishes = result.data.map((row) => {
        const mapped = toWish(row);
        return {
          ...mapped,
          align: alignMap.get(mapped.id) ?? mapped.align,
        };
      });

      if (!isCancelled) {
        setAllWishes(mappedWishes);
      }
    }

    void getAllWishes();
    return () => {
      isCancelled = true;
    };
  }, [clientId, wishes]);

  return (
    <div className="space-y-6">
      <h3 className="mb-8 text-center font-headline text-2xl italic text-primary">
        Ucapan dari Kerabat
      </h3>

      <div className="relative">
        <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-8 bg-linear-to-b " />
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-8 bg-linear-to-t " />
        <div className="max-h-100 space-y-6 overflow-y-auto pr-2 [scrollbar-color:rgba(159,66,38,0.55)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-secondary/60 [&::-webkit-scrollbar-thumb]:hover:bg-secondary [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2">
          {allWishes.map((wish) => {
            const isRight = wish.align === "right";
            const isPrimary = wish.tone === "primary";
            const isTertiary = wish.tone === "tertiary";

            return (
              <div key={wish.id} className={cn("flex gap-4", isRight && "flex-row-reverse")}>
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold",
                    isPrimary && "bg-primary-container text-on-primary-container",
                    isTertiary && "bg-tertiary-container text-on-tertiary-container",
                    !isPrimary &&
                      !isTertiary &&
                      "bg-secondary-container text-on-secondary-container",
                  )}
                >
                  {wish.initial}
                </div>

                <div
                  className={cn(
                    "max-w-lg rounded-2xl p-6",
                    isRight
                      ? "rounded-tr-none bg-primary text-on-primary shadow-md"
                      : "rounded-tl-none bg-surface-container-lowest shadow-sm",
                  )}
                >
                  <p className={cn("leading-relaxed", !isRight && "text-on-surface")}>
                    {wish.message}
                  </p>
                  <span
                    className={cn(
                      "mt-4 block text-[10px] uppercase tracking-widest",
                      isRight ? "opacity-60" : "text-outline-variant",
                    )}
                  >
                    {wish.name} - {formatFriendlyDate(wish.timeLabel)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {allWishes.length === 0 ? (
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low px-6 py-10 text-center text-on-surface-variant">
          Belum ada ucapan untuk saat ini.
        </div>
      ) : null}
    </div>
  );
}
