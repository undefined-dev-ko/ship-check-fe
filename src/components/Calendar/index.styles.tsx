import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 24px;
  background: #fff;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 28px;
  gap: 24px 0;
`;

const Header = styled.div`
  width: 484px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

const Content = styled.div`
  gap: 16px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .day_line {
    display: flex;
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
  }

  .date_line {
    display: flex;
    .date_box {
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
    }
  }
`;

export default {
  Container,
  Header,
  Content,
};
