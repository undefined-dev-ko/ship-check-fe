import { Reservation } from '../../types';
import Styled from './index.styles';

function ReservedSeatItem({
  reservation,
  isCancelUI,
  cancelReservation,
  selectSeat,
}: {
  reservation: Reservation | undefined;
  isCancelUI: boolean;
  cancelReservation: () => void;
  selectSeat: () => void;
}) {
  return (
    <>
      {isCancelUI ? (
        <Styled.CancelSeatItem onClick={cancelReservation}>
          <span className="cancel">취소하기</span>
        </Styled.CancelSeatItem>
      ) : (
        <Styled.ReservedSeatItem onClick={selectSeat}>
          <span className="name">{reservation?.user.name}</span>
          <span className="team">{reservation?.user.team.name}</span>
        </Styled.ReservedSeatItem>
      )}
    </>
  );
}

export default ReservedSeatItem;
