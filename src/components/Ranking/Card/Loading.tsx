import { Skeleton } from '@mui/material';
import Styled from './index.styles';

function LoadingRankingCard() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Skeleton
          className="profile-img"
          variant="rounded"
          width={140}
          height={140}
        />
        <Skeleton
          sx={{ left: '42.2px' }}
          className="name"
          variant="text"
          width={80}
          height={30}
        />
        <Skeleton
          sx={{ left: '52.2px' }}
          className="team"
          variant="text"
          width={60}
          height={25}
        />
        <Skeleton
          sx={{ left: '32.2px' }}
          className="count"
          variant="text"
          width={100}
          height={25}
        />
      </Styled.Content>
    </Styled.Container>
  );
}

export default LoadingRankingCard;
