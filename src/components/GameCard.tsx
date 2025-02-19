import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Game } from "@/types/GameTypes";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card className="relative bg-center bg-cover bg-no-repeat group">
      <Button variant="outline" size="icon" className="rounded-full absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><Plus/></Button>
      <img
        src={game.imageURL}
        alt=""
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <CardHeader className="relative z-10">
        <CardTitle className="text-lg font-bold m-0">{game.name}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <div>
          <div className="mb-4">
            
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
