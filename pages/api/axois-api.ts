/* External dependencies */
import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.kodjaz.com/api/';

export const $api = axios.create({
  baseURL: API_URL,
});

type Header = {
  [key: string]: string;
};

export const getHeaders = (token: string) => {
  const res: Header = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  if (token) {
    res['Authorization'] = `Bearer ${token}`;
  }
  return res;
};

export function getTokens() {
  const refreshToken = Cookies.get('refresh_token');
  const accessToken = Cookies.get('access_token');

  return { refreshToken, accessToken };
}

export function setTokens(accessToken: string, refreshToken: string) {
  Cookies.set('access_token', accessToken);
  Cookies.set('refresh_token', refreshToken);
}

export const getRequest = async (token: string, url: string) => {
  const headers = getHeaders(token);
  const config = {
    method: 'GET',
    headers: headers,
  };
  try {
    const res = await $api.get(url, config);

    return res?.data ?? {};
  } catch (error: any) {
    const {
      response: { data },
    } = error;

    return data;
  }
};

type Payload = {
  [key: string]: any;
};

export const postRequest = async (token: string, url: string, data: any) => {
  const headers = getHeaders(token);
  const config = {
    method: 'POST',
    headers: headers,
    url,
    data,
  };

  try {
    const res = await $api(config);

    return res?.data ?? {};
  } catch (error: any) {
    const {
      response: { data },
    } = error;

    return data;
  }
};

export const putRequest = async (token: string, url: string, data: Payload) => {
  const headers = getHeaders(token);
  const config = {
    method: 'PUT',
    headers: headers,
    url,
    data,
  };

  return $api(config);
};
