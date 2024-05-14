import Desk from './Desk';
import Styled from './index.styles';

import dayjs from 'dayjs';
import { User } from '../../types';
import { useGetAllReservation, useGetAllSeat } from '../../api/query';

function Reservation({ currentDate }: { currentDate: Date }) {
  const clickedDateString = dayjs(currentDate).format('YYYY-MM-DD');

  const { list: seatList } = useGetAllSeat() ?? {};

  const { list: reservationList } =
    useGetAllReservation({
      reservedAt: clickedDateString,
    }) ?? {};

  const myself: User = {
    id: 1,
    email: 'test@test.com',
    name: 'test',
    photo: 'test',
    reservations: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (!seatList || !reservationList) return <>loading</>;

  return (
    <Styled.Container>
      <Styled.SeatList>
        <ul className="first">
          {[1, 2, 3, 4, 5].map((deskNo, i) => (
            <Desk
              currentDate={clickedDateString}
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              key={i}
            />
          ))}
        </ul>

        <ul className="second">
          {[6, 7, 8, 9, 10].map((deskNo, i) => (
            <Desk
              currentDate={clickedDateString}
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              key={i}
            />
          ))}
        </ul>

        <ul className="third">
          {[11, 12, 13, 14, 15].map((deskNo, i) => (
            <Desk
              currentDate={clickedDateString}
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              key={i}
            />
          ))}
        </ul>

        <ul className="fourth">
          {[16, 17, 18, 19, 20].map((deskNo, i) => (
            <Desk
              currentDate={clickedDateString}
              seat={seatList.find((e) => e.deskNo === deskNo)}
              reservation={reservationList.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              myself={myself}
              key={i}
            />
          ))}
        </ul>
      </Styled.SeatList>
    </Styled.Container>
  );
}

export default Reservation;
