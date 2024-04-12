import styled from 'styled-components';
import { COLOR } from '../../styles/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 60px;
  background-color: ${COLOR.white};
  border-radius: 24px;
`;

const TitleDate = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

const SeatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 1160px;
  height: 564px;

  ul {
    display: flex;
    gap: 12px;

    &.third {
      margin-top: 60px;
    }
  }
`;

export default { Container, TitleDate, SeatList };
