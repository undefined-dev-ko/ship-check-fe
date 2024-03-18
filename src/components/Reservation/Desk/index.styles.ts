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

const ToolTip = styled.div`
  position: relative;

  .tooltiptext {
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, 10%);

    white-space: nowrap;
    background-color: #212121;
    box-shadow: 0px 2px 6px 2px #00000026;
    border-radius: 3px;
    padding: 12px;
    font-weight: 400;
    line-height: 20px;

    visibility: hidden;
  }

  .tooltiptext::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translate(-50%, 10%);

    border: 5px solid transparent;
    border-bottom-color: #212121;
    border-top: 0;
  }

  &:hover .tooltiptext {
    visibility: visible;
  }
`;

export default { Container, HoverContainer, ToolTip };
