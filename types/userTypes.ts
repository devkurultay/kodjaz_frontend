import { Session } from 'next-auth';

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password1: string;
  password2: string;
}

export interface User {
  email: string;
  name: string;
  user_id: number;
  username: string;
}

export interface JWT {
  email: string;
  name: string;
  user_id: number;
  username: string;
  exp: number;
}

interface BackendTokens {
  access: 'string';
  refresh: string;
}

export interface BackendTokensWithExpirationStamp extends BackendTokens {
  accessTokenExpires: number;
}

export interface Hashmap {
  [key: string | number]: any;
}

export interface ExtendedSession extends Session {
  access: string;
}

export interface BackendError {
  [key: string]: Array<string>;
}
