import React from 'react';
import dayjs from 'dayjs';

const MAX_DATE_LENGTH = 35;
const MAX_DAY_LENTH = 7;
const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

const useCalendar = ({ initialDate }: { initialDate?: Date }) => {
  const [currentDate, setCurrentDate] = React.useState(
    initialDate || new Date(),
  );

  const weekList: number[][] = [...new Array(MAX_DATE_LENGTH)]
    .map((_, i) => i + 1)
    .reduce(
      (prev, date) => {
        const day = dayjs(currentDate).set('date', date);
        if (day.month() !== currentDate.getMonth()) {
          return prev;
        }
        prev[prev.length - 1].push(date);
        if (day.day() === 6) {
          prev.push([]);
        }
        return prev;
      },
      [[]] as number[][],
    )
    .filter((v) => !!v.length);

  const weekPreviousMonthPadding: number[] = [
    ...new Array(MAX_DAY_LENTH - weekList[0].length),
  ]
    .map((_, i) => i + 1)
    .map((dateDifference) =>
      dayjs(currentDate)
        .startOf('month')
        .subtract(dateDifference, 'day')
        .date(),
    )
    .reverse();

  const weekNextMonthPadding: number[] = [
    ...new Array(MAX_DAY_LENTH - weekList[weekList.length - 1].length),
  ]
    .map((_, i) => i + 1)
    .map((dateDifference) =>
      dayjs(currentDate).endOf('month').add(dateDifference, 'day').date(),
    );

  return {
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
    weekList,
    weekPreviousMonthPadding,
    weekNextMonthPadding,
    dayNames: DAY_NAMES,
  };
};

export default useCalendar;
