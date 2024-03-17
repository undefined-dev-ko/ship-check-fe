import { useState } from 'react';
import LeftArrowIcon from '../SvgIcons/LeftArrowIcon';
import RightArrowIcon from '../SvgIcons/RightArrowIcon';
import Styled from './index.styles';
import dayjs from 'dayjs';
import DateBox from './DateBox';
import { toYYYYMMDD } from './util';
import DayBox from './DayBox';
import useWeekList from '../../hooks/useWeekList';

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
  onPrevMonthDateClick,
  onNextMonthDateClick,
}: {
  title: string;
  baseDate: Date;
  dayNames: string[];
  weekList: number[][];
  weekNextMonthPadding?: number[];
  weekPrevMonthPadding?: number[];
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
  onDateClick?: (date: Date) => void;
  onPrevMonthDateClick?: (date: Date) => void;
  onNextMonthDateClick?: (date: Date) => void;
}) {
  // const {
  //   baseDate,
  //   dayNames,
  //   setBaseDate,
  //   weekList,
  //   weekNextMonthPadding,
  //   weekPrevMonthPadding,
  // } = useWeekList();

  const baseYYYYMMDD = dayjs(baseDate).format('YYYYMMDD');
  const todayYYYYMMDD = dayjs().format('YYYYMMDD');
  return (
    <Styled.Container>
      <Styled.Header>
        <div
          className="round_box"
          onClick={() => {
            onPrevButtonClick();
            // setBaseDate(
            //   dayjs(baseDate).subtract(1, 'month').startOf('month').toDate(),
            // );
          }}
        >
          <LeftArrowIcon />
        </div>

        <p className="title">{dayjs(baseDate).format('YYYY년 MM월')}</p>

        <div
          className="round_box"
          onClick={() => {
            onNextButtonClick();
            // setBaseDate(
            //   dayjs(baseDate).add(1, 'month').startOf('month').toDate(),
            // );
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
          {weekList.map((week, i) => (
            <div
              className="flex_horizontal"
              key={i}
              style={{
                justifyContent:
                  i === 0
                    ? 'right'
                    : i === weekList.length - 1
                    ? 'left'
                    : 'center',
              }}
            >
              {/** 일 출력(이전달) */}
              {i === 0 &&
                weekPrevMonthPadding &&
                weekPrevMonthPadding.map((v) => {
                  const date = dayjs(baseDate)
                    .subtract(1, 'month')
                    .set('date', v);
                  return (
                    <DateBox
                      date={date.toDate()}
                      onClick={() => {
                        onPrevMonthDateClick(date.toDate());
                        // setBaseDate(date.toDate());
                      }}
                      isClicked={
                        date.format(DATE_COMPARE_FORMAT) === baseYYYYMMDD
                      }
                      isToday={
                        date.format(DATE_COMPARE_FORMAT) === todayYYYYMMDD
                      }
                      isDisabled={
                        date.format(DATE_COMPARE_FORMAT) < todayYYYYMMDD
                      }
                      isReserved={false}
                      key={v}
                    />
                  );
                })}
              {/** 일 출력 */}
              {week.map((v) => {
                const date = dayjs(baseDate).set('date', v);
                return (
                  <DateBox
                    date={date.toDate()}
                    onClick={() => {
                      onDateClick(date.toDate());
                      // setBaseDate(date.toDate());
                    }}
                    isClicked={
                      date.format(DATE_COMPARE_FORMAT) === baseYYYYMMDD
                    }
                    isToday={date.format(DATE_COMPARE_FORMAT) === todayYYYYMMDD}
                    isDisabled={
                      date.format(DATE_COMPARE_FORMAT) < todayYYYYMMDD
                    }
                    isReserved={false}
                    key={v}
                  />
                );
              })}
              {/** 일 출력(다음달) */}
              {i === weekList.length - 1 &&
                weekNextMonthPadding &&
                weekNextMonthPadding.map((v) => {
                  const date = dayjs(baseDate).add(1, 'month').set('date', v);
                  return (
                    <DateBox
                      date={date.toDate()}
                      onClick={() => {
                        onNextMonthDateClick(date.toDate());
                        // setBaseDate(date.toDate());
                      }}
                      isClicked={
                        date.format(DATE_COMPARE_FORMAT) === baseYYYYMMDD
                      }
                      isToday={
                        date.format(DATE_COMPARE_FORMAT) === todayYYYYMMDD
                      }
                      isDisabled={
                        date.format(DATE_COMPARE_FORMAT) < todayYYYYMMDD
                      }
                      isReserved={false}
                      key={v}
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
