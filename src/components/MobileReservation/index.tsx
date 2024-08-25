import Styled from './index.styles';
import dayjs from 'dayjs';
import { useGetAllReservation, useGetAllSeat } from '../../api/query';
import { User } from '../../types';
import { fixedSeatList } from '../../constants/fixedSeatList';
import SeatItem from './SeatItem';
import { useState } from 'react';
import useClickOutsideOfElement from '../../hooks/useClickOutsideOfElement';

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

  // 예약하기 UI 가 보여지는 seatId
  const [reserveUISeatId, setReserveUISeatId] = useState<number>();

  // 취소하기 UI 가 보여지는 seatId
  const [cancelUISeatId, setCancelUISeatId] = useState<number>();

  const handleShowReserveUI = (seatId: number) => {
    setReserveUISeatId(seatId);
  };

  const handleShowCancelUI = (seatId: number) => {
    setCancelUISeatId(seatId);
  };

  const { targetElementRef: seatItemRef } = useClickOutsideOfElement({
    onClickOutside: () => {
      // seat item 외부 클릭 시, 예약하기 UI, 취소하기 UI 초기화.
      setReserveUISeatId(undefined);
      setCancelUISeatId(undefined);
    },
  });

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.SeatList>
          {allSeatList.map((seat, i) => (
            <div
              ref={seatItemRef}
              className="seat-item-wrapper"
              key={`seat-item-${i}`}
            >
              <SeatItem
                seat={seat}
                reservation={reservationList.find((r) => r.seatId === seat.id)}
                isReserveUI={reserveUISeatId === seat.id}
                handleShowReserveUI={handleShowReserveUI}
                isCancelUI={cancelUISeatId === seat.id}
                handleShowCancelUI={handleShowCancelUI}
              />
            </div>
          ))}
        </Styled.SeatList>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
