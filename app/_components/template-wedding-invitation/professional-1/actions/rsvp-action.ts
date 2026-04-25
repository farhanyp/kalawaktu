"use server";
import { createInteractionByClientUrl } from "@/app/preview/professional-1/naruto-hinata/data/interactions/post";
import { CreateInteractionInput } from "@/app/preview/professional-1/naruto-hinata/data/types";
import { revalidatePath } from "next/cache";

export async function submitRsvpAction(clientUrl: string, input: CreateInteractionInput) {
  try {
    const data = await createInteractionByClientUrl(clientUrl, input);
    revalidatePath(`/preview/professional-1/${clientUrl}/beranda`);

    return { success: true, data };
  } catch (error) {
    console.error("Error in submitRsvpAction:", error);
    return { success: false, error: "Gagal mengirim RSVP" };
  }
}
