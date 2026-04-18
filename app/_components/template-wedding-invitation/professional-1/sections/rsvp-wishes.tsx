import { cn } from "@/lib/utils";
import type { Wish } from "@/types/rsvp";

interface RsvpWishesProps {
  wishes: Wish[];
}

export function ProfessionalOneRsvpWishes({ wishes }: RsvpWishesProps) {
  return (
    <div className="space-y-6">
      <h3 className="mb-8 text-center font-headline text-2xl italic text-primary">
        Ucapan dari Kerabat
      </h3>

      {wishes.map((wish) => {
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
                !isPrimary && !isTertiary && "bg-secondary-container text-on-secondary-container",
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
              <p className={cn("leading-relaxed", !isRight && "text-on-surface")}>{wish.message}</p>
              <span
                className={cn(
                  "mt-4 block text-[10px] uppercase tracking-widest",
                  isRight ? "opacity-60" : "text-outline-variant",
                )}
              >
                {wish.name} - {wish.timeLabel}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
