import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Reservation from '../../components/Reservation';
import Styled from './index.styles';
import Calendar from '../../components/Calendar';
import useWeekList from '../../hooks/useWeekList';
import { useState } from 'react';
import { UserProvider } from '../../context/userContext';

function MainPage() {
  const { baseDate, dayNames, setBaseDate, weekList } = useWeekList();
  const [clickedDate, setClickedDate] = useState<Date>(baseDate);
  const todayDate = new Date();

  return (
    <UserProvider>
      <Layout>
        <Styled.Container>
          <Styled.MainPageContainer>
            <Styled.ContentHeader>
              <Notice />
            </Styled.ContentHeader>

            <Styled.ContentBody>
              <Calendar
                todayDate={todayDate}
                clickedDate={clickedDate}
                baseDate={baseDate}
                reservedDateList={[
                  new Date(),
                  new Date('2024-04-12T05:00:00.000+09:00'),
                ]}
                setBaseDate={setBaseDate}
                dayNames={dayNames}
                weekList={weekList}
                onDateClick={(date: Date) => {
                  setClickedDate(date);
                }}
              />

              <Reservation currentDate={clickedDate} />
            </Styled.ContentBody>
          </Styled.MainPageContainer>
        </Styled.Container>
      </Layout>
    </UserProvider>
  );
}

export default MainPage;
