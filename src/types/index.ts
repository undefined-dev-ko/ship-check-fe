/**
 * 사용자 정보
 */
export interface User {
  id: number;
  email?: string;
  name: string;
  photo?: string;
  team: 'backend' | 'frontend' | 'design' | 'etc';
}

/**
 * 예약 정보
 */
export interface Reservation {
  id: number;
  user: User;
  seatId?: number;
  createdAt?: Date;
}

/**
 * 장비 정보
 */
export interface Item {
  id: number;
  category: 'monitor' | 'arm' | 'charger';
  memo?: string;
}

/**
 * 자리 정보
 */
export interface Seat {
  id: number;
  deskNo: number;
  fixedUser?: User;
  reservation?: Reservation;
  items: Item[];
}
