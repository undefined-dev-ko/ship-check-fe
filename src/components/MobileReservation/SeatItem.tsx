import { Reservation, Seat } from '../../types';
import EmptySeatItem from './EmptySeatItem';
import ReservedSeatItem from './ReservedSeatItem';
import Styled from './index.styles';

function SeatItem({
  seat,
  reservation,
  isSelected,
  handleSelectSeat,
  createReservation,
  cancelReservation,
}: {
  seat: Seat | undefined;
  reservation: Reservation | undefined;
  isSelected: boolean;
  handleSelectSeat: (seatId: number) => void;
  createReservation: (seatId: number) => void;
  cancelReservation: (seatId: number) => void;
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
          isReserveUI={isSelected}
          createReservation={() => createReservation(seat?.id)}
          selectSeat={() => handleSelectSeat(seat?.id)}
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
          isCancelUI={isSelected}
          cancelReservation={() => cancelReservation(seat?.id)}
          selectSeat={() => handleSelectSeat(seat?.id)}
        />
      )}
    </>
  );
}

export default SeatItem;
