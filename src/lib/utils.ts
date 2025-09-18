import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cookieConfig: Cookies.CookieAttributes = {
  expires: 7, //expires in 7day
  secure: true, //when all is done change to true
  sameSite: "Lax", //set to 'strict' when all is done
  path: "/",
};

export const setCookie = (key: string, value: string) =>
  Cookies.set(key, value, cookieConfig);
export const removeCookie = (key: string) => Cookies.remove(key);

export const getCookie = (key: string) => Cookies.get(key);

export function returnError(error: unknown): string {
  console.error(error);

  if (axios.isAxiosError(error))
    return error.response?.data?.message ?? "An error occurred";

  if (error instanceof Error) return error.message;

  return "An unknown error occurred";
}

export function isRouteProtected(currentRoute: string) {
  console.log("c", currentRoute);
  return true;
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {}
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`;
}
