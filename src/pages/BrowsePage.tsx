import CardList from "@/components/browse/CardList";
import CardListSkeleton from "@/components/browse/CardListSkeleton";
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from "@/lib/RawgUtils";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";

const BrowsePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page');
  const page = pageNumber ? parseInt(pageNumber) : 1;
  const { data, error, isLoading } = useQuery({queryKey: ['games', page], queryFn: () => fetchGames(page)});
  if (error) return <div>Error: {error.message}</div>;
  
  console.log(data);
  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      <button onClick={() => navigate(`/browse?page=${page + 1}`)}>Next</button>
      {isLoading ? <CardListSkeleton /> : <CardList data={data.results} />}
    </div>
  );
};

export default BrowsePage;
