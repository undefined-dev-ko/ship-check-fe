import { Reservation } from '../../types';
import Styled from './index.styles';

function ReservedSeatItem({
  reservation,
  isCancelUI,
  onClick,
}: {
  reservation: Reservation | undefined;
  isCancelUI: boolean;
  onClick: () => void;
}) {
  return (
    <Styled.ReservedSeatItem isCancelUI={isCancelUI} onClick={onClick}>
      {isCancelUI ? (
        <span className="cancel">취소하기</span>
      ) : (
        <>
          <span className="name">{reservation?.user.name}</span>
          <span className="team">{reservation?.user.team.name}</span>
        </>
      )}
    </Styled.ReservedSeatItem>
  );
}

export default ReservedSeatItem;
