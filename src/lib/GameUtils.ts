import { GameParentPlatform } from "@/types/GameTypes";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const calculateMetacriticRatingColor = (rating: number) => {
  if (rating >= 75) {
    return "bg-green-400";
  } else if (rating < 75 && rating >= 50) {
    return "bg-yellow-400";
  } else {
    return "bg-red-400";
  }
};

export const isOnPlatform = (platforms: GameParentPlatform[], slug: string) => {
  return platforms?.some((platform) => platform.platform.slug === slug) ?? false;
}

export const getCommaSeparatedString = (arr: string[]) => {
  return arr.join(', ');
}

