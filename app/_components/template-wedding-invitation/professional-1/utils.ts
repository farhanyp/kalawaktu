/**
 * Mengubah string tanggal menjadi label waktu relatif atau absolut
 * Contoh: "2 jam yang lalu" atau "19 April 2026, 14:30"
 */
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

  // Jika kurang dari 1 jam
  if (diffMinutes < 60) {
    if (diffMinutes < 1) return "Baru saja";
    return `${diffMinutes} menit yang lalu`;
  }

  // Jika kurang dari 24 jam
  if (diffHours < 24) {
    return `${diffHours} jam yang lalu`;
  }

  // Jika kurang dari 7 hari, tampilkan format "X hari yang lalu"
  if (diffDays < 7) {
    return `${diffDays} hari yang lalu`;
  }

  // Jika sudah lebih dari seminggu, tampilkan tanggal lengkap + jam menit
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
