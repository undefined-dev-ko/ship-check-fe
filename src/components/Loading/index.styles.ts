import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.5);

  .wrapper {
    position: absolute;
    top: 50%;
    left: calc(50% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper .loader {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .loader .loading {
    background: #d2b0ff;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    margin: 0 10px;
    animation: load 0.7s ease infinite;
  }
  .loader .loading.one {
    animation-delay: 0.3s;
  }
  .loader .loading.two {
    animation-delay: 0.4s;
  }
  .loader .loading.three {
    animation-delay: 0.5s;
  }
  @keyframes load {
    0% {
      width: 30px;
      height: 30px;
    }
    50% {
      width: 20px;
      height: 20px;
    }
  }
`;

export default { Container };
