import {
  FETCH_GAMES_ENDPOINT,
  RAWG_API_KEY,
} from "@/constants/RawgConstants";

export const fetchGames = async (page: number) => {
  const response = await fetch(
    `${FETCH_GAMES_ENDPOINT}?key=${RAWG_API_KEY}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchGameDetails = async (slug: string | undefined) => {
  const response = await fetch(
    `${FETCH_GAMES_ENDPOINT}/${slug}?key=${RAWG_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}