import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Styled from './index.styles';
import dayjs from 'dayjs';
import Calendar from '../../components/Calendar';
import useCalendar from '../../hooks/useWeekList';

function MainPage() {
  const {
    currentDate,
    dayNames,
    setCurrentDate,
    weekList,
    weekNextMonthPadding,
    weekPrevMonthPadding,
  } = useCalendar();

  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Notice />
          <div>content</div>
          <Calendar
            title={dayjs(currentDate).format('YYYY년 MM월')}
            currentDate={currentDate}
            dayNames={dayNames}
            weekList={weekList}
            weekNextMonthPadding={weekNextMonthPadding}
            weekPrevMonthPadding={weekPrevMonthPadding}
            onPrevButtonClick={() => {
              setCurrentDate(dayjs(currentDate).subtract(1, 'month').toDate());
            }}
            onNextButtonClick={() => {
              setCurrentDate(dayjs(currentDate).add(1, 'month').toDate());
            }}
            onDateClick={undefined}
            onNextMonthDateClick={undefined}
            onPrevMonthDateClick={undefined}
          />
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}

export default MainPage;
