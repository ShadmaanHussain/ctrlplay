import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Game, GameGenre } from "@/types/GameTypes";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface GameCardProps {
  game: Game;
}

const calculateRatingColor = (rating: number) => {
  if (rating >= 75) {
    return "bg-green-400";
  } else if (rating < 75 && rating >= 50) {
    return "bg-yellow-400";
  } else {
    return "bg-red-400";
  }
};

const getGnenreString = (genres: GameGenre[]) => {
  return genres.map(
    (genre) =>
      `${genre.name}${genres.indexOf(genre) !== genres.length - 1 ? ", " : ""}`
  );
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card className="relative bg-muted group">
      <Button
        title="Add to library"
        variant="outline"
        size="icon"
        className="rounded-full absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Plus />
      </Button>
      <img
        src={game.background_image}
        alt=""
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <CardHeader className="relative z-10 px-4 py-1 mb-0">
        <CardTitle className="text-lg font-bold m-0 whitespace-nowrap overflow-hidden text-ellipsis">
          {game.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center px-4 pb-4 pt-1 w-full">
        <div className="flex-1 overflow-hidden">
          <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            {getGnenreString(game.genres)}
          </p>
        </div>
        <div
          className={`text-sm w-5 h-5 ${calculateRatingColor(
            game.metacritic
          )} text-black font-bold ml-2 p-3 rounded-sm flex justify-center items-center`}
        >
          <p className="leading-none">{game.metacritic}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
