export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres: GameGenre[];
  released: string;
  metacritic: number;
}

export interface GameGenre {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface GameScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

export interface GameStores {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
  url: string;
}