/* External dependencies */
import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.kodjaz.com/api/';

export const $api = axios.create({
  baseURL: API_URL,
});

export const getHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: `Bearer ${Cookies.get('token') ? Cookies.get('token') : ''}`,
});

export function getTokens() {
  const refreshToken = Cookies.get('refresh_token');
  const accessToken = Cookies.get('access_token');

  return { refreshToken, accessToken };
}

export function setTokens(accessToken: string, refreshToken: string) {
  Cookies.set('access_token', accessToken);
  Cookies.set('refresh_token', refreshToken);
}
