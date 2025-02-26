export interface Game {
    id: number;
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