export type AttendanceStatus = "hadir" | "ragu-ragu" | "tidak-hadir";

export type GuestCount = "1" | "2";

export type WishTone = "default" | "primary" | "tertiary";

export type WishAlign = "left" | "right";

export interface RsvpFormData {
  name: string;
  guestCount: GuestCount;
  attendance: AttendanceStatus;
  message: string;
}

export interface Wish {
  id: string;
  initial: string;
  name: string;
  timeLabel: string;
  message: string;
  tone: WishTone;
  align: WishAlign;
}
