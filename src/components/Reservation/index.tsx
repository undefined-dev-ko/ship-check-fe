import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Styled from './index.styles';
import Desk from './Desk';
import { Seat } from '../../types';
import client from '../../api/client';

function Reservation(props: { currentDate: Date }) {
  const { currentDate } = props;
  const [seatList, setSeatList] = useState<Seat[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await client.get<Seat[]>(
          'http://localhost:3001/reservation',
        );
        setSeatList(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!seatList || loading) {
    return (
      <Styled.Container>
        <Styled.SeatList>...로딩중...</Styled.SeatList>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Styled.TitleDate>
        {dayjs(currentDate).format('YYYY년 MM월 DD일')}
      </Styled.TitleDate>

      <Styled.SeatList>
        <ul className="first">
          <Desk {...seatList.find((e) => e.deskNo === 1)} />
          <Desk {...seatList.find((e) => e.deskNo === 2)} />
          <Desk {...seatList.find((e) => e.deskNo === 3)} />
          <Desk {...seatList.find((e) => e.deskNo === 4)} />
          <Desk {...seatList.find((e) => e.deskNo === 5)} />
        </ul>

        <ul className="second">
          <Desk {...seatList.find((e) => e.deskNo === 6)} />
          <Desk {...seatList.find((e) => e.deskNo === 7)} />
          <Desk {...seatList.find((e) => e.deskNo === 8)} />
          <Desk {...seatList.find((e) => e.deskNo === 9)} />
          <Desk {...seatList.find((e) => e.deskNo === 10)} />
        </ul>

        <ul className="third">
          <Desk {...seatList.find((e) => e.deskNo === 11)} />
          <Desk {...seatList.find((e) => e.deskNo === 12)} />
          <Desk {...seatList.find((e) => e.deskNo === 13)} />
          <Desk {...seatList.find((e) => e.deskNo === 14)} />
          <Desk {...seatList.find((e) => e.deskNo === 15)} />
        </ul>

        <ul className="fourth">
          <Desk {...seatList.find((e) => e.deskNo === 16)} />
          <Desk {...seatList.find((e) => e.deskNo === 17)} />
          <Desk {...seatList.find((e) => e.deskNo === 18)} />
          <Desk {...seatList.find((e) => e.deskNo === 19)} />
          <Desk {...seatList.find((e) => e.deskNo === 20)} />
        </ul>
      </Styled.SeatList>
    </Styled.Container>
  );
}

export default Reservation;
