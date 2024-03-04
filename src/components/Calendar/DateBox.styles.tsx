import styled from 'styled-components';

const DateBox = styled.div`
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;

  .date {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    color: #1b1b1b;
  }
`;

export default { DateBox };
