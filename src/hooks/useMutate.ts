/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from 'react-query';

export const useMutateOnLoad = <T>(
  key: string,
  mutationFn: (value: number) => void,
  dataKey: string,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(mutationFn as any, {
    onMutate: (result: number) => result,
    onSuccess: (result: T[]) => {
      queryClient.cancelQueries(key);
      queryClient.setQueryData(key, (prevState: any) => ({
        ...prevState,
        userMusics: [...prevState[dataKey], ...result],

      }));
    },
  });

  return mutate;
};

export const useMutateByUrl = (
  key: string,
  mutationFn: (value: number) => void,
  dataKey: string,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(mutationFn as any, {
    onMutate: (value: any) => {
      queryClient.setQueryData(key, (prevState: any) => ({
        [dataKey]: [...prevState[dataKey], value],
      }));
    },
  });

  return mutate;
};
