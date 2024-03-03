import { useState } from 'react';
import LeftArrowIcon from '../SvgIcons/LeftArrowIcon';
import RightArrowIcon from '../SvgIcons/RightArrowIcon';
import Styled from './index.styles';
import dayjs from 'dayjs';
import { getDateStyle } from './util';

function Calendar({
  title,
  currentDate,
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
  currentDate: Date;
  dayNames: string[];
  weekList: number[][];
  weekNextMonthPadding?: number[];
  weekPrevMonthPadding?: number[];
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
  onDateClick?: (date: number) => void;
  onPrevMonthDateClick?: (date: number) => void;
  onNextMonthDateClick?: (date: number) => void;
}) {
  const [hoveredDate, setHoveredDate] = useState<Date | undefined>();
  console.log(hoveredDate);
  return (
    <Styled.Container>
      <Styled.Header>
        <div className="round_box" onClick={onPrevButtonClick}>
          <LeftArrowIcon />
        </div>

        <p className="title">{title}</p>

        <div className="round_box" onClick={onNextButtonClick}>
          <RightArrowIcon />
        </div>
      </Styled.Header>

      <Styled.Content>
        {/** 요일명 출력 */}
        <div className="day_line">
          {dayNames.map((v, i) => (
            <div className="day" key={i}>
              {v}
            </div>
          ))}
        </div>

        <div>
          {/** 주 출력 */}
          {weekList.map((week, i) => (
            <div
              className="date_line"
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
                weekPrevMonthPadding.map((v) => (
                  <div className="date_box" key={v}>
                    <div
                      className="date"
                      onMouseEnter={() => {
                        setHoveredDate(
                          dayjs(currentDate)
                            .subtract(1, 'month')
                            .set('date', v)
                            .toDate(),
                        );
                      }}
                      onMouseLeave={() => {
                        setHoveredDate(undefined);
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              {/** 일 출력 */}
              {week.map((v) => (
                <div className="date_box" key={v}>
                  <div
                    className="date"
                    onMouseEnter={() => {
                      setHoveredDate(
                        dayjs(currentDate).set('date', v).toDate(),
                      );
                    }}
                    onMouseLeave={() => {
                      setHoveredDate(undefined);
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
              {/** 일 출력(다음달) */}
              {i === weekList.length - 1 &&
                weekNextMonthPadding &&
                weekNextMonthPadding.map((v) => (
                  <div className="date_box" key={v}>
                    <div
                      className="date"
                      onMouseEnter={() => {
                        setHoveredDate(
                          dayjs(currentDate)
                            .add(1, 'month')
                            .set('date', v)
                            .toDate(),
                        );
                      }}
                      onMouseLeave={() => {
                        setHoveredDate(undefined);
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Calendar;
