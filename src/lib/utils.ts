import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ENV_VARS } from "@/constants/Constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEnvironmentVariables = () => {
  ENV_VARS.forEach((envVar) => {
    if (!import.meta.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is not set!`);
    }
  });
};
