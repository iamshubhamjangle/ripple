import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  if (!name) return "";
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  return initials.slice(0, 2).join(""); // Take the first two initials
}
