"use client";

import { useState } from "react";
import { ProfessionalOneRsvpWishes } from "./rsvp-wishes";
import type { AttendanceStatus, RsvpFormData, Wish } from "@/types/rsvp";

const initialWishes: Wish[] = [
  {
    id: "wish-raka-shinta",
    initial: "R",
    name: "Raka & Shinta",
    timeLabel: "2 jam lalu",
    message:
      "Selamat ya Tiara & Siddiq! Semoga lancar sampai hari H dan jadi keluarga yang sakinah. Can't wait for the big day!",
    tone: "default",
    align: "left",
  },
  {
    id: "wish-budi",
    initial: "B",
    name: "Budi Santoso",
    timeLabel: "5 jam lalu",
    message:
      "Wishing you both a lifetime of happiness. Truly an inspiration to us all. See you guys soon!",
    tone: "primary",
    align: "right",
  },
  {
    id: "wish-linda",
    initial: "L",
    name: "Linda",
    timeLabel: "Kemarin",
    message: "Akhirnya kapal ini berlabuh juga. Bahagia selalu ya kalian berdua!",
    tone: "tertiary",
    align: "left",
  },
];

const initialFormData: RsvpFormData = {
  name: "",
  guestCount: "1",
  attendance: "hadir",
  message: "",
};

function toneByAttendance(status: AttendanceStatus): Wish["tone"] {
  if (status === "hadir") {
    return "primary";
  }

  if (status === "ragu-ragu") {
    return "tertiary";
  }

  return "default";
}

export function ProfessionalOneRsvpSection() {
  const [formData, setFormData] = useState<RsvpFormData>(initialFormData);
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const message = formData.message.trim();

    if (!name || !message) {
      setFeedback("Nama dan ucapan wajib diisi.");
      return;
    }

    if (message.length < 8) {
      setFeedback("Ucapan minimal 8 karakter.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 500));

    const nextWish: Wish = {
      id: `wish-${Date.now()}`,
      initial: name.charAt(0).toUpperCase(),
      name,
      timeLabel: "Baru saja",
      message,
      tone: toneByAttendance(formData.attendance),
      align: formData.attendance === "hadir" ? "right" : "left",
    };

    setWishes((previous) => [nextWish, ...previous]);
    setFormData(initialFormData);
    setFeedback("RSVP berhasil dikirim. Terima kasih atas doa dan konfirmasinya.");
    setIsSubmitting(false);
  };

  return (
    <section className="bg-surface-container px-6 py-24" id="rsvp">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl italic text-primary">
            Konfirmasi Kehadiran &amp; Doa Restu
          </h2>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Mohon Berikan Kabar Bahagia &amp; Harapan Anda
          </p>
        </div>

        <div className="mb-16 overflow-hidden rounded-[2rem] bg-primary shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 md:h-auto md:w-1/3">
              <img
                className="h-full w-full object-cover"
                alt="elegant invitation card"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd69x4Df6cF6_1d-SrwKbgHYl_Wd9uexPI246z43n9vwxdrc2oJNMl3IPMbH8ZGeqIBx_x8ErIbfSCeUlm220xdhz5kP-n8neUPBpZPtEdXAsCfL1q1yQSZPSYjEOHjXOWb33yO9B-EbwN5DRB8ELdX444Vuxd3GY3OFZwj4TrvZGotK3NeQTbUqjlRamKx3QYT91XJIlWZA0gcTVGdThFvbq8yg1TYVE0ZgpATKnWC3E3UE9BfWMATB4XNdHqKpqxFz3NgP_Br9GQ"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            <div className="p-8 text-on-primary md:w-2/3 md:p-12">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                    Nama Lengkap
                  </label>
                  <input
                    className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary"
                    placeholder="Masukkan nama Anda"
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((previous) => ({ ...previous, name: event.target.value }))
                    }
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                      Jumlah Tamu
                    </label>
                    <select
                      className="w-full rounded-lg border-none bg-white/10 p-4 text-white focus:ring-2 focus:ring-on-primary"
                      value={formData.guestCount}
                      onChange={(event) =>
                        setFormData((previous) => ({
                          ...previous,
                          guestCount: event.target.value as RsvpFormData["guestCount"],
                        }))
                      }
                    >
                      <option className="text-on-surface" value="1">
                        1 Orang
                      </option>
                      <option className="text-on-surface" value="2">
                        2 Orang
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                      Kehadiran
                    </label>
                    <select
                      className="w-full rounded-lg border-none bg-white/10 p-4 text-white focus:ring-2 focus:ring-on-primary"
                      value={formData.attendance}
                      onChange={(event) =>
                        setFormData((previous) => ({
                          ...previous,
                          attendance: event.target.value as AttendanceStatus,
                        }))
                      }
                    >
                      <option className="text-on-surface" value="hadir">
                        Hadir
                      </option>
                      <option className="text-on-surface" value="ragu-ragu">
                        Ragu-ragu
                      </option>
                      <option className="text-on-surface" value="tidak-hadir">
                        Tidak Hadir
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                    Ucapan &amp; Doa Restu
                  </label>
                  <textarea
                    className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary"
                    placeholder="Tuliskan harapan Anda untuk kami..."
                    rows={3}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((previous) => ({ ...previous, message: event.target.value }))
                    }
                  />
                </div>

                {feedback ? (
                  <p className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white/90">
                    {feedback}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl bg-secondary py-4 font-bold uppercase tracking-widest text-on-secondary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <ProfessionalOneRsvpWishes wishes={wishes} />
      </div>
    </section>
  );
}
