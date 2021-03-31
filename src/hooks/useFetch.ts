import { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import { api } from 'services/api';

export const useFetch = <Data = unknown>(url: string, axiosConfig?: AxiosRequestConfig) => {
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
