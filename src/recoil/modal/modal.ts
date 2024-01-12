import { atom } from 'recoil';

export interface UserData {
  name: string;
  email: string;
}

export const userState = atom<UserData | null>({
  key: 'userState',
  default: null,
});
