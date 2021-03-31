import { QueryClient, useMutation } from 'react-query';

const queryClient = new QueryClient();

export const useCache = (key: string) => {
  const { mutate } = useMutation(key, {
    onMutate: (newData) => {
      queryClient.cancelQueries(key);
      queryClient.setQueryData(key, newData);
    },
  });

  return mutate;
};
