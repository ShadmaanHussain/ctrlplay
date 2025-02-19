import { data } from "./data";
import GameCard from "@/components/GameCard";
import { Game } from "@/types/GameTypes"

const BrowsePage = () => {
  console.log(data);
  const dataFinal: Game[] = data.results.map((game) => {
    return { name: game.name, imageURL: game.background_image };
  });
  return (
    <div className="max-w-7xl mx-auto mt-6 w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dataFinal.map((game: Game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default BrowsePage;
