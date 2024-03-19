import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Styled from './index.styles';
import dayjs from 'dayjs';
import Calendar from '../../components/Calendar';
import useWeekList from '../../hooks/useWeekList';

function MainPage() {
  const {
    baseDate,
    dayNames,
    setBaseDate,
    weekList,
    weekNextMonthPadding: nextMonthDateList, // 이거 수정
    weekPrevMonthPadding: prevMonthDateList, // 이거 수정
  } = useWeekList();

  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Styled.ContentHeader>
            <div>
              <Notice />
            </div>
            <div>
              <Calendar
                title={dayjs(baseDate).format('YYYY년 MM월')}
                baseDate={baseDate}
                dayNames={dayNames}
                weekList={weekList}
                weekNextMonthPadding={nextMonthDateList}
                weekPrevMonthPadding={prevMonthDateList}
                onPrevButtonClick={() => {
                  setBaseDate(
                    dayjs(baseDate)
                      .subtract(1, 'month')
                      .startOf('month')
                      .toDate(),
                  );
                }}
                onNextButtonClick={() => {
                  setBaseDate(
                    dayjs(baseDate).add(1, 'month').startOf('month').toDate(),
                  );
                }}
                onDateClick={(date: Date) => {
                  setBaseDate(date);
                }}
                miniCalendar={false}
              />
            </div>
          </Styled.ContentHeader>
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}

export default MainPage;
