import LeftArrowIcon from './LeftArrowIcon';
import RightArrowIcon from './RightArrowIcon';
import Styled from './index.styles';

function Calendar({
  title,
  dayNames,
  weekList,
}: {
  title: string;
  dayNames: string[];
  weekList: number[][];
}) {
  return (
    <Styled.ContainerOuter>
      <Styled.Header>
        <div className="round_box">
          <LeftArrowIcon />{' '}
        </div>

        <p className="title">{title}</p>

        <div className="round_box">
          <RightArrowIcon />{' '}
        </div>
      </Styled.Header>
      <Styled.Divider></Styled.Divider>
      <Styled.DateContainer>
        {dayNames.map((v, i) => (
          <div className="day" key={i}>
            {v}
          </div>
        ))}
      </Styled.DateContainer>

      {weekList.map((week, i, arr) => (
        <Styled.WeekContainer
          key={i}
          style={{
            justifyContent:
              i === 0 ? 'right' : i === arr.length - 1 ? 'left' : 'center',
          }}
        >
          {week.map((v, j) => (
            <div className="date" key={j}>
              {v}
            </div>
          ))}
        </Styled.WeekContainer>
      ))}
    </Styled.ContainerOuter>
  );
}

export default Calendar;
