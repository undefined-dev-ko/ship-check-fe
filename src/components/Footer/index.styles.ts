import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #333;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px;
  color: #cfcfcf;

  .left-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .bold {
    font-weight: 600;
  }

  .participant-container {
    display: flex;
    flex-direction: row;
    gap: 12px;
    :not(:last-of-type) {
      margin-bottom: 12px;
    }

    .participant :not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;

const Participants = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`;

const CopyRight = styled.div`
  display: flex;
  align-items: flex-end;
  color: #cfcfcf;
`;

export default { Container, Footer, Participants, Title, CopyRight };
