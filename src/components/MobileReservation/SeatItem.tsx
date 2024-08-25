import { Reservation, Seat } from '../../types';
import EmptySeatItem from './EmptySeatItem';
import ReservedSeatItem from './ReservedSeatItem';
import Styled from './index.styles';

function SeatItem({
  seat,
  reservation,
  isReserveUI,
  handleShowReserveUI,
  isCancelUI,
  handleShowCancelUI,
}: {
  seat: Seat | undefined;
  reservation: Reservation | undefined;
  isReserveUI: boolean;
  handleShowReserveUI: (seatId: number) => void;
  isCancelUI: boolean;
  handleShowCancelUI: (seatId: number) => void;
}) {
  const isFixedSeat = !!seat?.fixedUser;

  const hasReservation = !!reservation;

  const emptySeat = !isFixedSeat && !hasReservation;

  return (
    <>
      {/* 예약이 없는 기본 좌석 */}
      {emptySeat && (
        <EmptySeatItem
          seat={seat}
          isReserveUI={isReserveUI}
          onClick={() => handleShowReserveUI(seat?.id)}
        />
      )}

      {/* 고정 좌석 */}
      {isFixedSeat && (
        <Styled.FixedSeatItem>
          <span className="name">{seat?.fixedUser.name}</span>

          <span className="team">{seat?.fixedUser.team.name}</span>
        </Styled.FixedSeatItem>
      )}

      {/* 예약된 좌석 */}
      {hasReservation && (
        <ReservedSeatItem
          reservation={reservation}
          isCancelUI={isCancelUI}
          onClick={() => handleShowCancelUI(seat?.id)}
        />
      )}
    </>
  );
}

export default SeatItem;
