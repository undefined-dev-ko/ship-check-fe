import Desk from './Desk';
import Styled from './index.styles';
import dayjs from 'dayjs';
import {
  useCancelReservation,
  useCreateReservation,
  useGetAllReservation,
  useGetAllSeat,
  useGetUser,
} from '../../api/query';

function Reservation({ currentDate }: { currentDate: Date }) {
  const clickedDateString = dayjs(currentDate).format('YYYY-MM-DD');
  const isPassed = isBeforeToday(currentDate);

  const { list: seatList } = useGetAllSeat() ?? {};

  const { list: reservationList } =
    useGetAllReservation({
      reservedAt: clickedDateString,
    }) ?? {};

  const { data: myself } = useGetUser();

  const { mutate: createReservationMutate } = useCreateReservation();
  const { mutate: cancelReservationMutate } = useCancelReservation();
  const handleCreateReservation = (seatId: number) =>
    createReservationMutate({ seatId, reservedAt: clickedDateString });

  const handleCancelReservation = (seatId: number) =>
    cancelReservationMutate({ seatId, reservedAt: clickedDateString });

  return (
    <Styled.Container>
      <ul className="seat-list">
        {[...Array(20)]
          .map((_, i) => i + 1) // 1 ~ 20 까지의 배열
          .map((deskNo, i) => (
            <Desk
              isPassed={isPassed}
              seat={seatList && seatList.find((e) => e.deskNo === deskNo)}
              reservation={
                reservationList &&
                reservationList.find((v) => v.seat.deskNo === deskNo)
              }
              myself={myself}
              createReservation={handleCreateReservation}
              cancelReservation={handleCancelReservation}
              key={i}
            />
          ))}
      </ul>
    </Styled.Container>
  );
}

function isBeforeToday(date: Date) {
  const today = dayjs().startOf('day');
  const inputDate = dayjs(date).startOf('day');
  return inputDate.isBefore(today);
}

export default Reservation;
