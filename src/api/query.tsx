import {
  GetTokenPairWithGoogleAuthResponse,
  GetTokenPairWithGoogleAuthRequest,
  GetAllUserResponse,
  GetAllSeatResponse,
  CreateReservationRequest,
  CreateReservationResponse,
  GetReservationListResponse,
  CancelReservationRequest,
} from './interfaces';
import useAppQuery from '../hooks/useAppQuery';
import useAppMutation from '../hooks/useAppMutation';

function useGetAllSeat(): GetAllSeatResponse {
  const { data } = useAppQuery<GetAllSeatResponse>({
    queryKey: ['seats'],
    requestOptions: { method: 'GET', path: '/seat' },
  });
  return data;
}

function useGetAllUser(): GetAllUserResponse {
  const { data } = useAppQuery<GetAllUserResponse>({
    queryKey: ['users'],
    requestOptions: { method: 'GET', path: '/user' },
  });
  return data;
}

function useGetAllReservation({
  reservedAt,
}: {
  reservedAt: string;
}): GetReservationListResponse {
  const { data } = useAppQuery<GetReservationListResponse>({
    queryKey: ['reservations', reservedAt],
    requestOptions: { method: 'GET', path: `/reservation/${reservedAt}` },
  });
  return data;
}
function useGetTokenPairWithGoogleAuth(
  payload: GetTokenPairWithGoogleAuthRequest,
) {
  const res = useAppMutation<
    GetTokenPairWithGoogleAuthRequest,
    GetTokenPairWithGoogleAuthResponse
  >({
    requestOptions: {
      method: 'POST',
      path: '/auth/login/google',
      data: payload,
    },
    onSuccess: payload?.onSuccess,
  });
  return res;
}

function useCreateReservation(payload?: CreateReservationRequest) {
  return useAppMutation<CreateReservationRequest, CreateReservationResponse>({
    mutationKey: ['reservations'],
    requestOptions: { method: 'POST', path: '/reservation', data: payload },
  });
}

function useCancelReservation(payload?: CancelReservationRequest) {
  return useAppMutation<CancelReservationRequest, void>({
    mutationKey: ['reservations'],
    requestOptions: { method: 'DELETE', path: '/reservation', data: payload },
  });
}

export {
  useGetAllSeat,
  useGetAllUser,
  useGetAllReservation,
  useGetTokenPairWithGoogleAuth,
  useCreateReservation,
  useCancelReservation,
};
