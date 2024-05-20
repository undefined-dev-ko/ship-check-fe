import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTokenAuth } from '../../../hooks/useTokenAuth';
import { useGetTokenPairWithGoogleAuth } from '../../../api/query';
import { useEffect } from 'react';

export default function AuthGoogle() {
  const [searchParams] = useSearchParams();
  const authorizationCode = searchParams.get('code');
  const { storeToken } = useTokenAuth();
  const navigate = useNavigate();

  const { mutate } = useGetTokenPairWithGoogleAuth({
    onSuccess: (data) => {
      storeToken(data);
      navigate('/');
    },
  });

  useEffect(() => {
    mutate({ authorizationCode });
  }, [authorizationCode, mutate]);

  return <></>;
}
