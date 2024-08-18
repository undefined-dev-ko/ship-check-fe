import Styled from './index.styles';
import dayjs from 'dayjs';
import { useGetAllReservation, useGetAllSeat } from '../../api/query';
import { User } from '../../types';
import { fixedSeatList } from '../../constants/fixedSeatList';
import SeatItem from './SeatItem';

export default function MobileReservation({
  currentDate,
  myself,
}: {
  currentDate: Date;
  myself: User;
}) {
  const clickedDateString = dayjs(currentDate).format('YYYY-MM-DD');

  const { list: seatList = [] } = useGetAllSeat() || {};

  const allSeatList = seatList
    .map((seat) => fixedSeatList.find((e) => e.deskNo === seat.deskNo) || seat)
    .sort((a, b) => (a.deskNo > b.deskNo ? 1 : -1));

  const { list: reservationList = [] } =
    useGetAllReservation({
      reservedAt: clickedDateString,
    }) || {};

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.SeatList>
          {allSeatList.map((seat, i) => (
            <SeatItem
              seat={seat}
              reservation={reservationList.find((r) => r.seatId === seat.id)}
            />
          ))}
        </Styled.SeatList>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
