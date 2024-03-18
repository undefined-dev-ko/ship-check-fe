import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Reservation from '../../components/Reservation';

import Styled from './index.styles';

export default function MainPage() {
  const currentDate = new Date();
  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Notice />
          <Reservation currentDate={currentDate} />
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}
