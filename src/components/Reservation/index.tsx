import { Reservation as ReservationType, Seat, User } from '../../types';
import Desk from './Desk';
import Styled from './index.styles';

function Reservation({
  currentDate,
  seatList,
  reservationList,
  myself,
  createReservation,
  cancelReservation,
}: {
  currentDate: Date;
  seatList: Seat[];
  reservationList: ReservationType[];
  myself?: User;
  createReservation: (seatId: number) => void;
  cancelReservation: (seatId: number) => void;
}) {
  return (
    <Styled.Container>
      <Styled.SeatList>
        <ul className="first">
          {[1, 2, 3, 4, 5].map((deskNo, i) => (
            <Desk
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>

        <ul className="second">
          {[6, 7, 8, 9, 10].map((deskNo, i) => (
            <Desk
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>

        <ul className="third">
          {[11, 12, 13, 14, 15].map((deskNo, i) => (
            <Desk
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>

        <ul className="fourth">
          {[16, 17, 18, 19, 20].map((deskNo, i) => (
            <Desk
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>
      </Styled.SeatList>
    </Styled.Container>
  );
}

export default Reservation;
