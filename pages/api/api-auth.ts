/* Local dependencies */
import { Login } from '../../types/userTypes';
import { $api, setTokens } from './axois-api';

export async function register(data: any) {
  const response = await $api.post('registration/', data);
  const newAccessToken = response?.data?.access;
  const newRefreshToken = response?.data?.refresh;

  setTokens(newAccessToken, newRefreshToken);
  $api.defaults.headers.Authorization = 'JWT ' + newAccessToken;

  return response;
}

export function performIsAuthCheck(accessToken: string, refreshToken: string) {
  if (accessToken && refreshToken) {
    const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
    // exp date in token is expressed in seconds, while now() returns milliseconds:
    const now = Math.ceil(Date.now() / 1000);
    if (tokenParts.exp > now) {
      return true;
    }
  }
  return false;
}

export async function confirmEmail(key: string) {
  return await $api.post('registration/verify-email/', { key });
}

export async function login(data: Login) {
  const response = await $api.post('token/obtain/', data);
  const newAccessToken = response?.data?.access;
  const newRefreshToken = response?.data?.refresh;

  setTokens(newAccessToken, newRefreshToken);
  $api.defaults.headers.Authorization = 'JWT ' + newAccessToken;

  return response;
}

const logout = () => {};

const authService = {
  register,
  confirmEmail,
  login,
  logout,
};

export default authService;
