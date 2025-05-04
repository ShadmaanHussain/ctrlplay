import PageContainer from '@/components/PageContainer';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchGameDetails } from '@/lib/RawgUtils';
import GameDetails from '@/components/gamedetails/GameDetails';

const GameDetailsPage = () => {
    // const { slug } = useParams();
    // const { data, error, isLoading } = useQuery({
    //     queryKey: ["gamedetail", slug],
    //     queryFn: () => fetchGameDetails(slug),
    //   });
    // if(!error && !isLoading) console.log(JSON.stringify(data));
    
  return (
    <PageContainer className='mt-6 mb-6'>
        <GameDetails />
    </PageContainer>
  )
}

export default GameDetailsPage