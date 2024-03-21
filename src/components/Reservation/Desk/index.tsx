import { useState } from 'react';
import Styled from './index.styles';
import { Item, Seat } from '../../../types';
import { useUser } from '../../../hooks/useUser';

function Desk(props: Seat) {
  const { fixedUser, reservation, items } = props;
  const [isHovering, setIsHovering] = useState(false);
  const { user } = useUser();
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  // 고정석
  if (fixedUser) {
    return <Fixed name={fixedUser.name} team={fixedUser.team} />;
  }
  // 예약 O
  else if (reservation) {
    const isMine = user ? user.id === reservation.user.id : false;
    return (
      <Reserved
        isHovering={isHovering}
        isMine={isMine}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        name={reservation.user.name}
        team={reservation.user.team}
      />
    );
  }
  // 예약 X
  else {
    return (
      <Default
        isHovering={isHovering}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        items={items}
      />
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
    <Styled.Container className="fixed">
      <p className="name">{name}</p>
      <p className="team">{name === '김종하' ? 'CTO' : convertTeam(team)}</p>
    </Styled.Container>
  );
}

function Default({
  isHovering,
  handleMouseOver,
  handleMouseOut,
  items = [],
}: {
  isHovering: boolean;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  items: Item[];
}) {
  return (
    <Styled.Container
      className="default"
      isHovering={isHovering}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <>
          <p className="text">자리 예약하기</p>

          <Styled.ToolTip>
            <img src="/info_icon.svg" alt="info" />

            <div className="tooltiptext">
              {items.length &&
                items.map((item, index) => (
                  <p key={index}>- {convertItems(item)}</p>
                ))}
            </div>
          </Styled.ToolTip>
        </>
      )}
    </Styled.Container>
  );
}

function Reserved({
  isHovering,
  isMine,
  handleMouseOver,
  handleMouseOut,
  name,
  team,
}: {
  isHovering: boolean;
  isMine: boolean;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  name: string;
  team: 'backend' | 'frontend' | 'design' | 'etc';
}) {
  return (
    <Styled.Container
      className="reserved"
      isHovering={isHovering}
      isMine={isMine}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isMine && isHovering ? (
        <p className="text">예약 취소하기</p>
      ) : (
        <>
          <p className="name">{name}</p>
          <p className="team">{convertTeam(team)}</p>
        </>
      )}
    </Styled.Container>
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

const convertItems = (item: Item): string => {
  switch (item.category) {
    case 'monitor':
      return '모니터';
    case 'arm':
      return '모니터 암';
    case 'charger':
      return 'PD 충전기';
  }
};

export default Desk;
