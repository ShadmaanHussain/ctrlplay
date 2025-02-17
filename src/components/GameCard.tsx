import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Game = {
    name: string;
    imageURL: string;
}

interface GameCardProps {
    game: Game;
}

const GameCard:  React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card>
      <img src={game.imageURL} alt="" className="rounded-t-xl" />
      <CardHeader>
        <CardTitle className="text-2xl">{game.name}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default GameCard;
