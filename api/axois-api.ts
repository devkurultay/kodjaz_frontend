/* External dependencies */
import axios from 'axios';

/* Local dependencies */
import { getFromLocalStorage } from '../components/common/helper';
import { Login } from '../types/userTypes';

export const API_URL = 'https://backend.kodjaz.com/api/';

const $api = axios.create({
  baseURL: API_URL,
});

const $apiCredential = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export function authHeader() {
  const userStorage = getFromLocalStorage('user');
  const user = JSON.parse(userStorage);

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}

const register = (data: any) => {
  return $api.post('', data);
};

const login = (data: Login) => {
  return $apiCredential.post('/token/obtain/', data).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
