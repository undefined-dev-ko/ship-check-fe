import MenuItem from './MenuItem';
import Styled from './index.styles';
import useTokenAuth from '../../hooks/useTokenAuth';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';
import { useUser } from '../../hooks/useUser';
import { useEffect } from 'react';
import client from '../../api/client';
import { User } from '../../types';

function Header() {
  const { isLoggedIn, clearToken } = useTokenAuth();
  const { oauthSignIn: googleOauthSignin } = useGoogleAuth();
  const { user, actions } = useUser();

  const handleLoginClick = () => {
    googleOauthSignin();
  };
  const handleLogoutClick = () => {
    clearToken();
    actions.storeUser(null);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUser = async () => {
        try {
          const response = await client.get<User>('http://localhost:3001/user');
          actions.storeUser(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchUser();
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
            label={user ? 'Logout' : 'Login'}
            onClick={user ? handleLogoutClick : handleLoginClick}
          />
        </div>
      </Styled.Header>
    </Styled.Container>
  );
}

export default Header;
