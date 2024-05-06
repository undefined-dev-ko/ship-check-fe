import { useMutation, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Desk from './Desk';
import Styled from './index.styles';
import { RAW_QUERY } from '../../api/query';
import { useTokenAuth } from '../../hooks/useTokenAuth';

function Reservation({ currentDate }: { currentDate: Date }) {
  const { tokenPair } = useTokenAuth();
  const currentDateFormatted = dayjs(currentDate).format('YYYY-MM-DD');

  const { data: getAllSeatResponse } = useQuery({
    queryKey: ['seats'],
    queryFn: () => RAW_QUERY.getAllSeats(tokenPair),
    enabled: !!tokenPair,
  });

  const { data: getReservationListResponse, refetch: refetchReservationList } =
    useQuery({
      queryKey: ['reservations', currentDateFormatted],
      queryFn: () =>
        RAW_QUERY.getReservationList({
          ...tokenPair,
          reservedAt: currentDateFormatted,
        }),
      enabled: !!getAllSeatResponse,
    });

  const { mutate: createReservationMutate } = useMutation({
    mutationFn: RAW_QUERY.createReservation,
    onSuccess: (data) => {
      refetchReservationList();
    },
  });

  const { mutate: cancelReservationMutate } = useMutation({
    mutationFn: RAW_QUERY.cancelReservation,
    onSuccess: (data) => {
      refetchReservationList();
    },
  });

  const createReservation = (seatId: number) => {
    createReservationMutate({
      ...tokenPair,
      reservedAt: currentDateFormatted,
      seatId,
    });
  };

  const cancelReservation = (seatId: number) => {
    cancelReservationMutate({
      ...tokenPair,
      reservedAt: currentDateFormatted,
      seatId,
    });
  };

  if (!getAllSeatResponse || !getReservationListResponse) return null;

  return (
    <Styled.Container>
      <Styled.SeatList>
        <ul className="first">
          {[1, 2, 3, 4, 5].map((deskNo, i) => (
            <Desk
              seat={getAllSeatResponse.list.find((e) => e.deskNo === deskNo)}
              reservation={getReservationListResponse.list.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>

        <ul className="second">
          {[6, 7, 8, 9, 10].map((deskNo, i) => (
            <Desk
              seat={getAllSeatResponse.list.find((e) => e.deskNo === deskNo)}
              reservation={getReservationListResponse.list.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>

        <ul className="third">
          {[11, 12, 13, 14, 15].map((deskNo, i) => (
            <Desk
              seat={getAllSeatResponse.list.find((e) => e.deskNo === deskNo)}
              reservation={getReservationListResponse.list.find(
                (v) => v.seat.deskNo === deskNo,
              )}
              createReservation={createReservation}
              cancelReservation={cancelReservation}
              key={i}
            />
          ))}
        </ul>

        <ul className="fourth">
          {[16, 17, 18, 19, 20].map((deskNo, i) => (
            <Desk
              seat={getAllSeatResponse.list.find((e) => e.deskNo === deskNo)}
              reservation={getReservationListResponse.list.find(
                (v) => v.seat.deskNo === deskNo,
              )}
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
