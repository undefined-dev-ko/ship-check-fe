import styled from 'styled-components';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  background-color: #f7f7f7;
  gap: 40px;
`;

const ContentHeader = styled.div`
  display: flex;

  gap: 40px;

  > div {
    min-width: 655px;

    display: flex;
    align-items: stretch;
    justify-content: center;
    /* flex: 1 1 0; */
  }
`;

export default { MainPageContainer, ContentHeader };
