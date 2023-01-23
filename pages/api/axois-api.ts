import axios, { AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.kodjaz.com/api/';

const isTokenExpired = (errorResp: AxiosResponse) => {
  const { data, status } = errorResp;
  const { detail } = data;
  const errorMsgs = [
    'Given token not valid for any token type',
    'Token has been expired.',
  ];
  return status === 401 && errorMsgs.includes(detail);
};

const getWrongCredentialsErrorMessages = (errorResp: AxiosResponse) => {
  const { data, status } = errorResp;
  if (status > 401) {
    return [];
  }
  const { email, password, detail } = data;
  const errorMsg = [];
  detail && errorMsg.push(detail);
  email && errorMsg.push(`Email: ${email?.[0]}`);
  password && errorMsg.push(`Password: ${password?.[0]}`);
  return errorMsg;
};

const getTokensFromCookies = () => {
  const accessToken = Cookies.get('access_token');
  const refreshToken = Cookies.get('refresh_token');
  return { accessToken, refreshToken };
};

export const setTokensToCookies = (
  access_token: string,
  refresh_token: string,
) => {
  Cookies.set('access_token', access_token);
  Cookies.set('refresh_token', refresh_token);
};

export const $api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: Cookies.get('access_token')
      ? 'Token ' + Cookies.get('access_token')
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const errorResp = error.response;
    if (isTokenExpired(errorResp ?? {})) {
      return refreshTokenAndResendRequest(error);
    }
    const wrongCredentialsErrors = getWrongCredentialsErrorMessages(errorResp);
    if (wrongCredentialsErrors.length > 0) {
      return Promise.reject(wrongCredentialsErrors);
    }
    return Promise.reject(error);
  },
);

let isFetchingAccessTokenInProgress = false;

type AccessTokenCallback = (accessToken: string) => void;

let subscribers: AccessTokenCallback[] = [];

const addSubscriber = (cb: AccessTokenCallback) => {
  subscribers.push(cb);
};

const triggerSubscribers = (accessToken: string) => {
  subscribers.forEach((cb) => cb(accessToken));
  subscribers = [];
};

const refreshTokenAndResendRequest = async (error: AxiosError) => {
  try {
    const { accessToken, refreshToken } = getTokensFromCookies();
    if (!accessToken || !refreshToken) {
      return Promise.reject(error);
    }
    const { response: errorResponse } = error;
    const resendOriginalRequest = new Promise((resolve) => {
      addSubscriber((token: string) => {
        if (errorResponse?.config?.headers) {
          errorResponse.config.headers.Authorization = 'Token ' + token;
        }
        if (errorResponse?.config) {
          resolve(axios(errorResponse.config));
        }
      });
    });
    if (!isFetchingAccessTokenInProgress) {
      isFetchingAccessTokenInProgress = true;
      const response = await axios.post(API_URL + 'token/refresh/', {
        refresh: refreshToken,
      });
      if (response && !response.data) {
        return Promise.reject(error);
      }
      const newAccessToken = response?.data?.access;
      const newRefreshToken = response?.data?.refresh;
      await setTokensToCookies(newAccessToken, newRefreshToken);
      $api.defaults.headers.Authorization = 'Token ' + newAccessToken;
      isFetchingAccessTokenInProgress = false;
      triggerSubscribers(newAccessToken);
    }
    return resendOriginalRequest;
  } catch (e) {
    return Promise.reject(e);
  }
};

export default $api;
