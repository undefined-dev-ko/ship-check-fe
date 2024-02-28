import styled from 'styled-components';

const ContainerOuter = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 24px;
  width: 552px;
  height: 593px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 484px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 17px 28px;

  .round_box {
    width: 58px;
    height: 58px;
    box-sizing: border-box;
    background: #ffffff;
    border: 3px solid #f6f6f6;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    size: 24px;
  }
`;

const Divider = styled.div`
  width: 460px;
  margin: 0px 17px;
  height: 0px;
  border: 2px solid rgba(163, 163, 166, 0.8);
`;

const DateContainer = styled.div`
  width: 476px;
  display: flex;

  margin-top: 21px;

  .day {
    width: 68px;
    height: 68px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #b3b3b3;
  }
`;

const WeekContainer = styled.div`
  width: 476px;
  display: flex;

  .date {
    width: 68px;
    height: 68px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #b3b3b3;
  }
`;

export default {
  ContainerOuter,
  Header,
  Divider,
  DateContainer,
  WeekContainer,
};
