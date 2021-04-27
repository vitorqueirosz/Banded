/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutationKey, QueryClient, useMutation } from 'react-query';

const queryClient = new QueryClient();

export const useCache = (key: string, mutationFn: MutationKey) => {
  const { mutate } = useMutation(mutationFn, {
    onMutate: (newData) => {
      queryClient.cancelQueries(key);
      queryClient.setQueryData(key, (prevState: any) => ({
        ...prevState,
        newData,
      }));
    },
  });

  return mutate;
};
