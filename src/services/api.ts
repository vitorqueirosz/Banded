import axios, { AxiosRequestConfig } from 'axios';
import { isUserAuthenticated } from 'utils/session';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = isUserAuthenticated();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
