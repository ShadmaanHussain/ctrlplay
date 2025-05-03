export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres: GameGenre[];
  released: string;
  metacritic: number;
}


export interface GameDetails {
  name: string;
  released: string | null;
  rating: number | null;
  ratings_count: number | null;
  description: string | null;
  parent_platforms?: GameParentPlatform[] | null;
  stores?: GameStores[] | null;
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

export interface GameParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface GamePlatformDetails {
  platform: Platform;
  released_at: string;
  requirements: {
    minimum?: string;
    recommended?: string;
  };
}

export interface GameDeveloper {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GamePublisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}