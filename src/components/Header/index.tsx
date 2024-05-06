import { useEffect } from 'react';
import MenuItem from './MenuItem';
import Styled from './index.styles';
import { useTokenAuth } from '../../hooks/useTokenAuth';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';
import { useUser } from '../../hooks/useUser';

function Header() {
  const { user, actions } = useUser();
  const { isLoggedIn, clearToken, user: extractedUser } = useTokenAuth();
  const { oauthSignIn: googleOauthSignin } = useGoogleAuth();

  const handleLoginClick = () => {
    googleOauthSignin();
  };
  const handleLogoutClick = () => {
    clearToken();
    actions.storeUser(null);
  };

  useEffect(() => {
    if (isLoggedIn) {
      actions.storeUser(extractedUser);
    }
  }, [isLoggedIn]);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Logo>
          <div className="logo-img" />

          <div className="logo-txt-en">Ship-Check</div>
          <div className="logo-txt-kr">쉽첵</div>
        </Styled.Logo>

        <div className="right-container">
          {user && <Styled.ProfileImage user={user} />}

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
