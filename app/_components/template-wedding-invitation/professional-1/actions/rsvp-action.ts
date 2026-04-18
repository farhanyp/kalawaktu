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
