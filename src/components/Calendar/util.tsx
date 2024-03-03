import dayjs from 'dayjs';

const dayDefaultStyle: React.CSSProperties = {
  color: '#1B1B1B',
};
const dayHoverStyle: React.CSSProperties = {
  color: '#FFF',
  borderRadius: '15px',
  background: '#AD00FF 20%',
};
const dayClickedStyle: React.CSSProperties = {
  color: '#FFF',
  borderRadius: '15px',
  background: '#AD00FF',
};
const dayReservedStyle: React.CSSProperties = {
  color: '#AD00FF',
};
const dayTodayStyle: React.CSSProperties = {
  color: '#AD00FF',
  borderRadius: '15px',
  border: '3px solid #AD00FF',
};
const dayDisabledStyle: React.CSSProperties = {
  color: '#B3B3B3',
};

export const getDateStyle = (
  isHover: boolean,
  isClicked: boolean,
  isReserved: boolean,
  isToday: boolean,
  isDisabled: boolean,
): React.CSSProperties => {
  if (isHover) {
    return dayHoverStyle;
  }
  if (isClicked) {
    return dayClickedStyle;
  }
  if (isReserved) {
    return dayReservedStyle;
  }
  if (isToday) {
    return dayTodayStyle;
  }
  if (isDisabled) {
    return dayDisabledStyle;
  }
  return dayDefaultStyle;
};

export const toYYYYMMDD = (date: Date) => {
  return dayjs(date).format('YYYYMMDD');
};
