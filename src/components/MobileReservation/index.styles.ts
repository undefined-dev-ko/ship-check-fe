import styled, { css } from 'styled-components';
import { COLOR } from '../../styles/constants';
import { media } from '../../styles/media';

const Wrapper = styled.div`
  ${media.mobile`
  overflow-x: scroll;
 `};
`;

const Container = styled.div`
  ${media.mobile`
   padding: 20px;
  width: 500px;
  border-radius: 24px;
  background-color: ${COLOR.white};
  `};
`;

const SeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > *:nth-child(2n) {
    ${media.mobile`
    margin-bottom: 20px;
  `};
  }
`;

const SeatList = styled.ul`
  ${media.mobile`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  `};
`;

const SeatItem = styled.li<{ $isHovering?: boolean; isMine?: boolean }>`
  ${media.mobile`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: ${COLOR.white};
  cursor: default;
  background-color: #eee;
  width: 90px;
  height: 60px;
  max-width: 222.4px;
  max-height: 120px;
  border-radius: 8px;
  `};

  .name {
    ${media.mobile`
    font-size: 16px;
    line-height: 20px;
  `};
  }

  .team {
    ${media.mobile`
    font-size: 12px;
    line-height: 20px;
  `};
  }

  .desk-no {
    ${media.mobile`
    font-size: 25px;
  `};
  }
`;

export default {
  Wrapper,
  Container,
  SeatContainer,
  SeatList,
  SeatItem,
};
