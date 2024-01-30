import { useState } from 'react';
import MenuItem from './MenuItem';
import Styled from './index.styles';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Logo>
          <div className="logo-img" />

          <div className="logo-txt-en">Ship-Check</div>
          <div className="logo-txt-kr">쉽첵</div>
        </Styled.Logo>

        <div className="right-container">
          {isLoggedIn && <Styled.ProfileImage />}

          <MenuItem
            label={isLoggedIn ? 'Logout' : 'Login'}
            onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
          />
        </div>
      </Styled.Header>
    </Styled.Container>
  );
}

export default Header;
