import CardList from "@/components/browse/CardList";
import CardListSkeleton from "@/components/browse/CardListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "@/lib/RawgUtils";
import { useSearchParams } from "react-router";
import GameCardPagination from "@/components/browse/GameCardPagination";
import { useEffect } from "react";

const BrowsePage = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  const page = pageNumber ? parseInt(pageNumber) : 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  },[page])

  const { data, error, isLoading } = useQuery({
    queryKey: ["games", page],
    queryFn: () => fetchGames(page),
  });
  if (error) return <div>Error: {error.message}</div>;
  const totalPages = isLoading ? 0 : data.count;

  
  
  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      {isLoading ? (
        <CardListSkeleton />
      ) : (
        <div>
          <CardList data={data.results} />
          <GameCardPagination activePage={page} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
};

export default BrowsePage;
