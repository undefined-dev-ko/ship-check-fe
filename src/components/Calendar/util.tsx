import dayjs from 'dayjs';

export const toYYYYMMDD = (date: Date): string => {
  return dayjs(date).format('YYYYMMDD');
};
