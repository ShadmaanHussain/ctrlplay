import {
  FETCH_GAMES_ENDPOINT,
} from "@/constants/RawgConstants";

export const fetchGames = async (page: number) => {
  const response = await fetch(
    `${FETCH_GAMES_ENDPOINT}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
