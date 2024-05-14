import { Reservation, Seat, TokenPair, User } from '../types';

export type GetTokenPairWithGoogleAuthRequest = {
  authorizationCode: string;
};

export type GetTokenPairWithGoogleAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type GetAllUserRequest = {} & TokenPair;
export type GetAllUserResponse = Array<Pick<User, 'id' | 'email'>>;

export type GetAllSeatRequest = {} & TokenPair;
export type GetAllSeatResponse = {
  list: Seat[];
};

export type CreateReservationRequest = {
  seatId: number;
  reservedAt: string;
};
export type CreateReservationResponse = Reservation;

export type GetReservationListRequest = {} & TokenPair;
export type GetReservationListResponse = {
  list: Reservation[];
};

export type CancelReservationRequest = {
  seatId: number;
  reservedAt: string;
};
