import { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import { useRequest } from './useRequest';

export const useFetch = <Data = unknown>(url: string, axiosConfig?: AxiosRequestConfig) => {
  const api = useRequest();

  const { data, isLoading, error } = useQuery<Data>(url, async () => {
    const response = await api.get(url, axiosConfig);

    return response.data;
  });

  return {
    data,
    isLoading,
    error,
  };
};
