import Loading from '../../Loading';
import Styled from './index.styles';

function Reserved({
  isHovering,
  isMine,
  isPassed,
  handleMouseOver,
  handleMouseOut,
  name,
  team,
  onClickCancelButton,
  isPendingCancel,
}: {
  isHovering: boolean;
  isMine: boolean;
  isPassed: boolean;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  name: string;
  team: string; // 'backend' | 'frontend' | 'design' | 'etc';
  onClickCancelButton: () => void;
  isPendingCancel: boolean;
}) {
  const hoverActive = isMine && isHovering && !isPassed;
  return (
    <Styled.Container
      className="reserved"
      $isHovering={hoverActive}
      isMine={isMine}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={hoverActive ? onClickCancelButton : () => {}}
    >
      {isPendingCancel ? (
        <Loading />
      ) : (
        <>
          {hoverActive ? (
            <p className="text">예약 취소하기</p>
          ) : (
            <>
              <p className="name">{name}</p>
              <p className="team">{convertTeam(team)}</p>
            </>
          )}
        </>
      )}
    </Styled.Container>
  );
}

const convertTeam = (team: string) => {
  switch (team) {
    case 'backend':
      return '백엔드팀';
    case 'frontend':
      return '프론트엔드팀';
    case 'design':
      return '디자인팀';
    case 'etc':
      return '기획팀';
    default:
      return '소속팀 없음';
  }
};

export default Reserved;
