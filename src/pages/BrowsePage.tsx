import CardList from "@/components/browse/CardList";
import CardListSkeleton from "@/components/browse/CardListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "@/lib/RawgUtils";
import { useSearchParams } from "react-router";
import GameCardPagination from "@/components/browse/GameCardPagination";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PageContainer from "@/components/PageContainer";

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
    console.log(error);
    return <div>Error: {error.message}</div>;
  }

  if (!isLoading && !data) {
    return (
      <PageContainer>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            No data fetched! Please check your internet connection and try
            again.
          </AlertDescription>
        </Alert>
      </PageContainer>
    );
  }

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
