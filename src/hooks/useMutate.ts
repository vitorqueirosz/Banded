/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from 'interfaces';
import { MutationFunction, useMutation, useQueryClient } from 'react-query';

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

export const useMutateUsersChat = (
  key: string,
  mutationFn: (value: number) => void,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(mutationFn as any, {
    onMutate: (message: any) => {
      queryClient.setQueryData(key, ({ chats }: any) => {
        const { createdAt, text, id } = message;

        const currentChat = chats.find((chat: any) => chat.id === id);

        const filteredChat = chats.filter((chat: any) => chat.id !== id);

        return {
          chats: [
            ...filteredChat,
            {
              ...currentChat,
              ...message,
              lastMessage: {
                text,
                createdAt,
              },
            },
          ],
        };
      });
    },
  });

  return mutate;
};

export const useMutateUser = (
  key: string,
  mutationFn: MutationFunction<string>,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(mutationFn, {
    onSuccess: (value: string) => {
      queryClient.setQueryData<{ user?: User }>(key, prevState => ({
        user: { ...(prevState?.user ?? ({} as User)), avatar: value },
      }));
    },
  });

  return mutate;
};
