import PageContainer from '@/components/PageContainer';
import { useParams } from 'react-router';

const GameDetailsPage = () => {
    const { slug } = useParams();
  return (
    <PageContainer>
        {slug}
    </PageContainer>
  )
}

export default GameDetailsPage