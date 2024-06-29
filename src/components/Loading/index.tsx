import Styled from './index.styles';

function Loading() {
  return (
    <Styled.Container>
      <section className="wrapper">
        <div className="loader">
          <div className="loading one"></div>
          <div className="loading two"></div>
          <div className="loading three"></div>
          <div className="loading four"></div>
        </div>
      </section>
    </Styled.Container>
  );
}

export default Loading;
