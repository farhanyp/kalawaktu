"use server";

import { revalidatePath } from "next/cache";
import {
  createInteractionByClientUrl,
  getInteractionsByClientUrl,
  CreateInteractionInput,
} from "@/app/preview/professional-1/naruto-hinata/data"; // Sesuaikan path ini

/**
 * Action untuk mengirim RSVP baru
 */
export async function submitRsvpAction(clientUrl: string, input: CreateInteractionInput) {
  try {
    const data = await createInteractionByClientUrl(clientUrl, input);

    // Revalidasi cache agar data terbaru masuk ke server-side rendering jika diperlukan
    revalidatePath(`/preview/professional-1/${clientUrl}`);

    return { success: true, data };
  } catch (error) {
    console.error("Error in submitRsvpAction:", error);
    return { success: false, error: "Gagal mengirim RSVP" };
  }
}

/**
 * Action baru untuk mengambil semua ucapan (Interactions)
 * dan mengubahnya menjadi format 'Wish' untuk UI
 */
export async function getInteractionsAction() {
  try {
    const data = await getInteractionsByClientUrl();

    // Transformasi data dari Database (InteractionRow) ke format UI (Wish)
    const mappedWishes: Wish[] = data.map((item) => ({
      id: item.id,
      initial: item.name ? item.name.charAt(0).toUpperCase() : "?",
      name: item.name,
      timeLabel: item.created_at
        ? new Date(item.created_at).toLocaleDateString("id-ID")
        : "Baru saja",
      message: item.message ?? "",
      tone: item.absence ? "default" : "primary",
      // DEFAULT: Semuanya di kiri dulu, nanti di sisi client kita timpa jika itu milik user
      align: "left",
    }));

    return { success: true, data: mappedWishes };
  } catch (error) {
    console.error("Error in getInteractionsAction:", error);
    return { success: false, data: [], error: "Gagal mengambil data ucapan" };
  }
}
