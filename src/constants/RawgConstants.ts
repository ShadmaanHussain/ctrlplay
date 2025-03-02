export const RAWG_BASE_URL = import.meta.env.VITE_RAWGBASEURL;
export const RAWG_API_KEY = import.meta.env.VITE_RAWGAPIKEY;

export const RAWG_GAMES_ENDPOINT = "/games";
export const FETCH_GAMES_ENDPOINT = `${RAWG_BASE_URL}${RAWG_GAMES_ENDPOINT}?key=${RAWG_API_KEY}`;