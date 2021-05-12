import { AxiosRequestConfig } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { useRequest } from './useRequest';

export const useFetch = <Data = unknown>(
  url: string,
  axiosConfig?: AxiosRequestConfig,
  options?: UseQueryOptions<Data, unknown, Data>,
) => {
  const api = useRequest();

  const { data, isLoading, error } = useQuery<Data>(
    url,
    async () => {
      const response = await api.get(url, axiosConfig);

      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 5,
      ...options,
    },
  );

  return {
    data,
    isLoading,
    error,
  };
};
