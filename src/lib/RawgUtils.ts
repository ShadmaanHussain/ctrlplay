import {
  RAWG_API_KEY,
  RAWG_BASE_URL,
  RAWG_GAMES_ENDPOINT,
} from "@/constants/RawgConstants";

export const fetchGames = async (page: number) => {
  const response = await fetch(
    `${RAWG_BASE_URL}${RAWG_GAMES_ENDPOINT}?key=${RAWG_API_KEY}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
