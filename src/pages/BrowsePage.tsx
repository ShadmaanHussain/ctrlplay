import CardList from "@/components/browse/CardList";
import CardListSkeleton from "@/components/browse/CardListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "@/lib/RawgUtils";
import { useSearchParams } from "react-router";
import GameCardPagination from "@/components/browse/GameCardPagination";
import { useEffect } from "react";
import PageContainer from "@/components/PageContainer";
import ErrorAlert from "@/components/ErrorAlert";

const BrowsePage = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  const page = pageNumber ? parseInt(pageNumber) : 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["games", page],
    queryFn: () => fetchGames(page),
  });

  if (error) {
    return (
      <PageContainer>
        <ErrorAlert message={`An error occured: ${error.message}.`} />
      </PageContainer>
    );
  }

  if (!isLoading && !data) {
    return (
      <PageContainer>
        <ErrorAlert
          message="No data fetched! Please check your internet connection and try
            again."
        />
      </PageContainer>
    );
  }

  console.log(data);
  const totalPages = isLoading ? 0 : data.count;

  return (
    <PageContainer>
      {isLoading ? (
        <CardListSkeleton />
      ) : (
        <>
          <CardList data={data.results} />
          <GameCardPagination activePage={page} totalPages={totalPages} />
        </>
      )}
    </PageContainer>
  );
};

export default BrowsePage;
