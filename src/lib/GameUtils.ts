import { GameDetails, GameParentPlatform } from "@/types/GameTypes";

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

export const transformGameData = (data: GameDetails) => {
  const gameHeaderData = {
    isOnPC: isOnPlatform(data?.parent_platforms ?? [], "pc"),
    isOnPlaystation: isOnPlatform(data?.parent_platforms ?? [], "playstation"),
    isOnXbox: isOnPlatform(data?.parent_platforms ?? [], "xbox"),
    gameName: data?.name || "Unknown Game",
    released: data?.released || null,
    rating: data?.rating || null,
    totalRatings: data?.ratings_count || null,
  };

  const gameInfoData = {
    platforms: data?.platforms ?? [],
    genres: data?.genres ?? [],
    releaseDate: data?.released,
    developers: data?.developers ?? [],
    publishers: data?.publishers ?? [],
    website: data?.website,
    tags: data?.tags ?? [],
  }

  return {
    gameHeaderData,
    gameInfoData,
  };
}
