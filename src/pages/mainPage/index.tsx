import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Styled from './index.styles';
import dayjs from 'dayjs';
import Calendar from '../../components/Calendar';
import useCalendar from '../../hooks/useWeekList';

function MainPage() {
  // const {
  //   baseDate,
  //   dayNames,
  //   setBaseDate,
  //   weekList,
  //   weekNextMonthPadding,
  //   weekPrevMonthPadding,
  // } = useCalendar();

  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Notice />
          <div>content</div>
          <Calendar
          // title={dayjs(baseDate).format('YYYY년 MM월')}
          // baseDate={baseDate}
          // dayNames={dayNames}
          // weekList={weekList}
          // weekNextMonthPadding={weekNextMonthPadding}
          // weekPrevMonthPadding={weekPrevMonthPadding}
          // onPrevButtonClick={() => {
          //   setBaseDate(
          //     dayjs(baseDate).subtract(1, 'month').startOf('month').toDate(),
          //   );
          // }}
          // onNextButtonClick={() => {
          //   setBaseDate(
          //     dayjs(baseDate).add(1, 'month').startOf('month').toDate(),
          //   );
          // }}
          // onDateClick={undefined}
          // onNextMonthDateClick={undefined}
          // onPrevMonthDateClick={undefined}
          />
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}

export default MainPage;
