import styled from 'styled-components';
import { COLOR } from '../../styles/constants';

const Container = styled.div`
  width: 100%;
  background-color: #333;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px;
  color: ${COLOR.white};
  word-break: keep-all;
  white-space: nowrap;

  .left-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .bold {
    font-weight: 600;
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: 20px;

    dd {
      display: flex;
      flex-direction: column;
      gap: 12px;

      div {
        display: flex;
        flex-direction: row;
        gap: 5px;
      }
    }
  }

  .member-container {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const Title = styled.div`
  color: ${COLOR.white};
  font-size: 40px;
  font-weight: 700;
`;

const CopyRight = styled.p`
  display: flex;
  align-items: flex-end;
  color: ${COLOR.gray};
`;

export default { Container, Footer, MemberList, Title, CopyRight };
