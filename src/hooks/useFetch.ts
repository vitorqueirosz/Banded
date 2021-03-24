import { useQuery } from 'react-query';
import { api } from 'services/api';

export const useFetch = (url: string) => {
  const { data, isLoading, error } = useQuery(url, async () => {
    const response = await api.get(url);

    return response.data;
  });

  return {
    data,
    isLoading,
    error,
  };
};
