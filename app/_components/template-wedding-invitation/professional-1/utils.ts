export function formatFriendlyDate(dateString?: string | Date) {
  if (!dateString) return "Baru saja";

  const date = new Date(dateString);
  const timestamp = date.getTime();

  if (Number.isNaN(timestamp)) return "Baru saja";

  const now = Date.now();
  const diffMs = now - timestamp;
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 60) {
    if (diffMinutes < 1) return "Baru saja";
    return `${diffMinutes} menit yang lalu`;
  }

  if (diffHours < 24) {
    return `${diffHours} jam yang lalu`;
  }

  if (diffDays < 7) {
    return `${diffDays} hari yang lalu`;
  }

  return date
    .toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(".", ":");
}

/**
 * Mengambil nilai cookie berdasarkan nama
 */
export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }

  return null;
};

/**
 * Menyimpan cookie dengan durasi menit
 */
export const setCookie = (name: string, value: string, minutes: number): void => {
  if (typeof document === "undefined") return;

  const date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
};
