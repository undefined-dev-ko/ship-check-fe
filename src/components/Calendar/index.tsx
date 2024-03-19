import dayjs from 'dayjs';
import LeftArrowIcon from '../SvgIcons/LeftArrowIcon';
import RightArrowIcon from '../SvgIcons/RightArrowIcon';
import DateBox from './DateBox';
import DayBox from './DayBox';
import Styled from './index.styles';

const DATE_COMPARE_FORMAT = 'YYYYMMDD';
function Calendar({
  title,
  baseDate,
  dayNames,
  weekList,
  weekNextMonthPadding,
  weekPrevMonthPadding,
  onNextButtonClick,
  onPrevButtonClick,
  onDateClick,
  miniCalendar = false,
}: {
  title: string;
  baseDate: Date;
  dayNames: string[];
  weekList: number[][];
  weekNextMonthPadding: number[];
  weekPrevMonthPadding: number[];
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
  onDateClick?: (date: Date) => void;
  miniCalendar?: boolean;
}) {
  const baseYYYYMMDD = dayjs(baseDate).format('YYYYMMDD');
  const todayYYYYMMDD = dayjs().format('YYYYMMDD');

  const baseDateWeek = weekList.reduce((prev, curr, i) => {
    if (curr.find((v) => v === baseDate.getDate())) {
      return i + 1;
    }
    return prev;
  }, 1);

  const composedWeekList: Array<Array<{ date: Date; value: number }>> =
    weekList.map((week, i) => {
      const result: Array<{ date: Date; value: number }> = [];
      weekPrevMonthPadding &&
        i === 0 &&
        (() => {
          result.push(
            ...weekPrevMonthPadding.map((v) => ({
              date: dayjs(baseDate)
                .subtract(1, 'month')
                .set('date', v)
                .toDate(),
              value: v,
            })),
          );
        })();

      result.push(
        ...week.map((v) => ({
          date: dayjs(baseDate).set('date', v).toDate(),
          value: v,
        })),
      );

      weekNextMonthPadding &&
        i === weekList.length - 1 &&
        (() => {
          result.push(
            ...weekNextMonthPadding.map((v) => ({
              date: dayjs(baseDate).add(1, 'month').set('date', v).toDate(),
              value: v,
            })),
          );
        })();

      return result;
    });

  const weekListToShow: Array<Array<{ date: Date; value: number }>> =
    miniCalendar
      ? (composedWeekList.length === baseDateWeek
          ? [
              composedWeekList[baseDateWeek - 2],
              composedWeekList[baseDateWeek - 1],
            ]
          : [composedWeekList[baseDateWeek - 1], composedWeekList[baseDateWeek]]
        ).filter((v) => !!v)
      : composedWeekList;

  return (
    <Styled.Container>
      <Styled.Header>
        <div
          className="round_box"
          onClick={() => {
            onPrevButtonClick();
          }}
        >
          <LeftArrowIcon />
        </div>

        <p className="title">{dayjs(baseDate).format('YYYY년 MM월')}</p>

        <div
          className="round_box"
          onClick={() => {
            onNextButtonClick();
          }}
        >
          <RightArrowIcon />
        </div>
      </Styled.Header>

      <Styled.Content>
        {/** 요일명 출력 */}
        <div className="flex_horizontal">
          {dayNames.map((v, i) => (
            <DayBox dayName={v} />
          ))}
        </div>

        <div>
          {/** 주 출력 */}
          {weekListToShow.map((week, i) => (
            <div
              className="flex_horizontal"
              key={i}
              style={{
                // 이거 가독성 클래스 로 빼자 스타일드 컴포넌트로 프롭스로 넘기자조건같은거
                justifyContent:
                  i === 0
                    ? 'right'
                    : i === weekList.length - 1
                    ? 'left'
                    : 'center',
              }}
            >
              {/** 일 출력 */}
              {week.map((v) => {
                const date = v.date;
                const dateYYYYMMDD = dayjs(v.date).format(DATE_COMPARE_FORMAT);
                return (
                  <DateBox
                    date={date}
                    onClick={() => {
                      onDateClick(date);
                    }}
                    isClicked={dateYYYYMMDD === baseYYYYMMDD}
                    isToday={dateYYYYMMDD === todayYYYYMMDD}
                    isDisabled={dateYYYYMMDD < todayYYYYMMDD}
                    isReserved={false}
                    key={v.date.toString()}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Calendar;
