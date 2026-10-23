import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBasePath(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("data:")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}
