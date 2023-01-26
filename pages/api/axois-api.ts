/* External dependencies */
import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.kodjaz.com/api/';

export const $api = axios.create({
  baseURL: API_URL,
});

export const getHeaders = (token: string) => ({
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: `Bearer ${token}`,
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

export const postRequest = async (
  token: string,
  url: string,
  data: Payload,
) => {
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

export const putRequest = (token: string, url: string, data: Payload) => {
  const headers = getHeaders(token);
  const config = {
    method: 'PUT',
    headers: headers,
    url,
    data,
  };

  return $api(config);
};
