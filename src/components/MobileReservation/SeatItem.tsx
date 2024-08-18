import { Reservation, Seat } from '../../types';
import Styled from './index.styles';

function SeatItem({
  seat,
  reservation,
}: {
  seat: Seat | undefined;
  reservation: Reservation | undefined;
}) {
  const isFixedSeat = !!seat?.fixedUser;

  const hasReservation = !!reservation;

  const emptySeat = !isFixedSeat && !hasReservation;

  return (
    <>
      <Styled.SeatItem>
        {emptySeat && <span className="desk-no">{seat.deskNo}</span>}

        {isFixedSeat && (
          <>
            {seat?.fixedUser.name} {seat?.fixedUser.team.name}
          </>
        )}

        {hasReservation && (
          <>
            {reservation?.user.name} {reservation?.user.team.name}
          </>
        )}
      </Styled.SeatItem>
    </>
  );
}

export default SeatItem;
