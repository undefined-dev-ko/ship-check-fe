import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: pink;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 30px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  .logo-img {
    width: 50px;
    height: 50px;
    background-image: url('/logo.png');
    background-size: cover;
  }
  .logo-txt-en,
  .logo-txt-kr {
    font-family: 'Inter';
    font-size: 30px;
    font-weight: 700;
  }
  .logo-txt-kr {
    color: #6c6c6c;
  }
`;

const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
`;

export default { Container, Header, Logo, ProfileImage };
