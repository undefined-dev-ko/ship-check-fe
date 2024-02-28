import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Styled from './index.styles';
import dayjs from 'dayjs';
import Calendar from '../../components/Calendar';
import useCalendar from '../../hooks/useWeekList';

function MainPage() {
  const { currentDate, dayNames, setCurrentDate, weekList } = useCalendar();

  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Notice />
          <div>content</div>
          <Calendar
            title={dayjs(currentDate).format('YYYY년 MM월')}
            dayNames={dayNames}
            weekList={weekList}
          />
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}

export default MainPage;
