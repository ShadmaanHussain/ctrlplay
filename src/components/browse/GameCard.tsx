import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/types/GameTypes";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import MetacriticScore from "../MetacriticScore";
import { getCommaSeparatedString } from "@/lib/GameUtils";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const gameGenres = game.genres.map((genre) => genre.name);

  return (
    <Card className="relative bg-muted group">
      <Button
        aria-label="Add to library"
        title="Add to library"
        variant="outline"
        size="icon"
        className="rounded-full absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Plus />
      </Button>
      <Link to={`/browse/${game.slug ? game.slug : game.id}`}>
        <img
          src={game.background_image}
          alt="game cover"
          className="rounded-t-xl w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>
      <CardHeader className="relative z-10 px-4 py-1 mb-0">
      <Link to={`/browse/${game.slug ? game.slug : game.id}`}>
        <CardTitle className="text-lg font-bold m-0 whitespace-nowrap overflow-hidden text-ellipsis">
          {game.name}
        </CardTitle>
      </Link>
      </CardHeader>
      <CardContent className="flex justify-between items-center px-4 pb-4 pt-1 w-full">
        <div className="flex-1 overflow-hidden">
          <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            {getCommaSeparatedString(gameGenres)}
          </p>
        </div>
        {game.metacritic && (
          <MetacriticScore score={game.metacritic} />
        )}
      </CardContent>
    </Card>
  );
};

export default GameCard;
