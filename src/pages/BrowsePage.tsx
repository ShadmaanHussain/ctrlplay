import CardList from "@/components/browse/CardList";
import { useQuery } from '@tanstack/react-query';

const fetchGames = async () => {
  const response = await fetch('https://api.rawg.io/api/games?key=3c1a67e228c84ce880cc6c35b8464dab'); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const BrowsePage = () => {
  const { data, error, isLoading } = useQuery({queryKey: ['games'], queryFn: fetchGames});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      <CardList data={data.results} />
    </div>
  );
};

export default BrowsePage;
