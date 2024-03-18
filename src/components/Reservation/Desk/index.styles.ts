import styled from 'styled-components';
import { COLOR } from '../../../styles/constants';

const Container = styled.div<{ color?: string; isMine?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 222.4px;
  height: 120px;
  border-radius: 16px;
  color: ${COLOR.white};
  background-color: ${(props) => props.color ?? '#eee'};
  box-shadow: ${(props) =>
    props.isMine ? `0 0 0 8px ${COLOR.primaryGreen} inset` : ''};

  .text {
    font-weight: 600;
    line-height: 30px;
  }
  .name {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
  }
  .team {
    font-weight: 500;
    line-height: 30px;
  }
`;

const HoverContainer = styled(Container)`
  cursor: pointer;
`;

export default { Container, HoverContainer };
