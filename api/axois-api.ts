/* External dependencies */
import axios from 'axios';
import Cookies from 'js-cookie';

/* Local dependencies */
import { Login } from '../types/userTypes';

export const API_URL = 'https://backend.kodjaz.com/api/';

const $api = axios.create({
  baseURL: API_URL,
});

const $apiCredential = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const getHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: `Bearer ${Cookies.get('token') ? Cookies.get('token') : ''}`,
});

async function getTokens() {
  const refreshToken = await Cookies.get('refresh_token');
  const accessToken = await Cookies.get('access_token');
  return { refreshToken, accessToken };
}

function setTokens(accessToken: string, refreshToken: string) {
  Cookies.set('access_token', accessToken);
  Cookies.set('refresh_token', refreshToken);
}

const register = (data: any) => {
  return $api.post('', data);
};

export async function login(data: Login) {
  const response = await $apiCredential.post('token/obtain/', data);
  const newAccessToken = response?.data?.access;
  const newRefreshToken = response?.data?.refresh;

  setTokens(newAccessToken, newRefreshToken);
  $apiCredential.defaults.headers.Authorization = 'JWT ' + newAccessToken;

  return response;
}

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
