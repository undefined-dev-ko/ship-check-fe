import Styled from './index.styles';
import { Seat } from '..';
import { COLOR } from '../../../styles/constants';
import { useRef } from 'react';
import useHover from '../../../hooks/useHover';

function Desk(props: Seat) {
  const { fixedUser, reservation } = props;
  const ref = useRef<HTMLLIElement>(null);
  const isHovering = useHover<HTMLLIElement>(ref);

  // 고정석
  if (fixedUser) {
    return (
      <li>
        <Fixed name={fixedUser.name} team={fixedUser.team} />
      </li>
    );
  }
  // 예약 O
  else if (reservation) {
    const { user } = reservation;
    return (
      <li ref={ref}>
        <Reserved isHovering={isHovering} name={user.name} team={user.team} />
      </li>
    );
  }
  // 예약 X
  else {
    return (
      <li ref={ref}>
        <Default isHovering={isHovering} />
      </li>
    );
  }
}

function Fixed({
  name,
  team,
}: {
  name: string;
  team: 'backend' | 'frontend' | 'design' | 'etc';
}) {
  return (
    <Styled.Container color={COLOR.primaryBlue}>
      <p className="name">{name}</p>
      <p className="team">{name === '김종하' ? 'CTO' : convertTeam(team)}</p>
    </Styled.Container>
  );
}

function Default({ isHovering }: { isHovering: boolean }) {
  return (
    <>
      {isHovering ? (
        <Styled.HoverContainer color={COLOR.primaryGreen}>
          <p className="text">자리 예약하기</p>
        </Styled.HoverContainer>
      ) : (
        <Styled.Container />
      )}
    </>
  );
}

function Reserved({
  isHovering,
  name,
  team,
}: {
  isHovering: boolean;
  name: string;
  team: 'backend' | 'frontend' | 'design' | 'etc';
}) {
  return (
    <>
      {isHovering ? (
        <Styled.HoverContainer color={COLOR.primaryRed}>
          <p className="text">예약 취소하기</p>
        </Styled.HoverContainer>
      ) : (
        <Styled.Container color={COLOR.primaryPurple}>
          <p className="name">{name}</p>
          <p className="team">{convertTeam(team)}</p>
        </Styled.Container>
      )}
    </>
  );
}

const convertTeam = (team: 'backend' | 'frontend' | 'design' | 'etc') => {
  switch (team) {
    case 'backend':
      return '백엔드팀';
    case 'frontend':
      return '프론트엔드팀';
    case 'design':
      return '디자인팀';
    case 'etc':
      return '기획팀';
  }
};

export default Desk;
