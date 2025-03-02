import GameCard from "@/components/browse/GameCard";
import { Game } from "@/types/GameTypes";

interface CardListProps {
  data: Game[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="mt-6 mb-8 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((game: Game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};

export default CardList;
