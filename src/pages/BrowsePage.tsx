import { data } from "./data";
import GameCard from "@/components/GameCard";
import { Game } from "@/types/GameTypes";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BrowsePage = () => {
  console.log(data);
  const dataFinal: Game[] = data.results.map((game) => {
    return {
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      genres: game.genres,
      released: game.released,
      metacritic: game.metacritic,
    };
  });

  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      <div className="mt-6 mb-8 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dataFinal.map((game: Game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
      <Pagination className="mb-14">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BrowsePage;
