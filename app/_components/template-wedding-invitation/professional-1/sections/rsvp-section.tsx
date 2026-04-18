"use client";

import { useState, useEffect } from "react";
import { ProfessionalOneRsvpWishes } from "./rsvp-wishes";
import { submitRsvpAction } from "../actions/rsvp-action";
import {
  AttendanceStatus,
  ProfessionalOneInvitationData,
  ProfessionalOneRsvpFormData,
  ProfessionalOneWish,
} from "../core/types";

type RSVPSectionProps = {
  invitation: ProfessionalOneInvitationData;
};

const initialFormData: ProfessionalOneRsvpFormData = {
  name: "",
  guestCount: "1",
  attendance: "hadir",
  message: "",
};

function toneByAttendance(status: AttendanceStatus): ProfessionalOneWish["tone"] {
  if (status === "hadir") return "primary";
  if (status === "ragu-ragu") return "tertiary";
  return "default";
}

export function ProfessionalOneRsvpSection({ invitation }: RSVPSectionProps) {
  const { slug, wishes: serverWishes } = invitation;

  const [formData, setFormData] = useState<ProfessionalOneRsvpFormData>(initialFormData);
  const [wishes, setWishes] = useState<ProfessionalOneWish[]>(serverWishes);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const STORAGE_KEY = `kala_waktu_sent_ids_${slug}`;
  useEffect(() => {
    const sentIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (sentIds.length > 0) {
      setWishes((prev) =>
        prev.map((wish) => ({
          ...wish,
          align: sentIds.includes(wish.id) ? "right" : "left",
        })),
      );
    }
  }, [STORAGE_KEY]);

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
    setFeedback("");

    try {
      const result = await submitRsvpAction(slug, {
        name,
        message,
        absence: formData.attendance === "tidak-hadir",
        total_guest: Number(formData.guestCount),
        is_confirmed: true,
      });

      if (result.success && result.data) {
        const newId = result.data.id;
        const sentIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        sentIds.push(newId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sentIds));
        const newWish: ProfessionalOneWish = {
          id: newId,
          initial: name.charAt(0).toUpperCase(),
          name: name,
          timeLabel: "Baru saja",
          message: message,
          tone: toneByAttendance(formData.attendance),
          align: "right",
        };

        setWishes((prev) => [newWish, ...prev]);
        setFormData(initialFormData);
        setFeedback("Terima kasih! Doa Anda telah tersimpan.");
      } else {
        setFeedback(result.error || "Gagal mengirim. Silakan coba lagi.");
      }
    } catch (err) {
      setFeedback("Terjadi kesalahan koneksi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surface-container px-6 py-24" id="rsvp">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl italic text-primary">
            Konfirmasi Kehadiran & Doa Restu
          </h2>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Mohon Berikan Kabar Bahagia & Harapan Anda
          </p>
        </div>

        <div className="mb-16 overflow-hidden rounded-[2rem] bg-primary shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 md:h-auto md:w-1/3">
              <img
                className="h-full w-full object-cover"
                alt="RSVP Background"
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
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
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value as any })
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
                      onChange={(e) =>
                        setFormData({ ...formData, attendance: e.target.value as AttendanceStatus })
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
                    Ucapan & Doa Restu
                  </label>
                  <textarea
                    className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary"
                    placeholder="Tuliskan harapan Anda untuk kami..."
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {feedback && (
                  <p className="rounded-lg bg-white/20 px-4 py-3 text-sm text-white transition-all">
                    {feedback}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl bg-secondary py-4 font-bold uppercase tracking-widest text-on-secondary shadow-lg transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-70"
                >
                  {isSubmitting ? "Sedang Mengirim..." : "Kirim Konfirmasi"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Wishes List */}
        {isLoading ? (
          <div className="py-20 text-center text-on-surface-variant opacity-60 animate-pulse">
            Memasukkan doa-doa tamu...
          </div>
        ) : (
          <ProfessionalOneRsvpWishes wishes={wishes} />
        )}
      </div>
    </section>
  );
}
