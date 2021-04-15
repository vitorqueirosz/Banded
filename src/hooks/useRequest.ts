import { useRef } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { isUserAuthenticated } from 'utils/session';
import { useToast } from 'contexts';

export const useRequest = () => {
  const { setToast } = useToast();

  const api = useRef(axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  }));

  const onRequest = (config: AxiosRequestConfig) => {
    const accessToken = isUserAuthenticated();

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }

    return config;
  };

  const onRejected = (error: AxiosError) => {
    setToast({
      description: error.response?.data.error ?? 'Erro ao realizar requisicao',
      title: 'Error',
      type: 'error',
    });

    return Promise.reject(error);
  };

  api.current.interceptors.request.use(onRequest);
  api.current.interceptors.response.use((response) => response, onRejected);

  return api.current;
};
