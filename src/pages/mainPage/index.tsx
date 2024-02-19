import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Styled from './index.styles';

export default function MainPage() {
  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Notice />
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}
