import { Seat } from '../../types';
import Styled from './index.styles';

function EmptySeatItem({
  seat,
  isReserveUI,
  createReservation,
  selectSeat,
}: {
  seat: Seat | undefined;
  isReserveUI: boolean;
  createReservation: () => void;
  selectSeat: () => void;
}) {
  return (
    <>
      {isReserveUI ? (
        <Styled.ReserveSeatItem onClick={createReservation}>
          <span>예약하기</span>
        </Styled.ReserveSeatItem>
      ) : (
        <Styled.EmptySeatItem onClick={selectSeat}>
          <span>{seat.deskNo}</span>
        </Styled.EmptySeatItem>
      )}
    </>
  );
}

export default EmptySeatItem;
