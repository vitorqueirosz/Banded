import { BANDS, USERS } from 'constants/endpoints';
import { useMutateUser, useRequest } from 'hooks';
import { ModalBandFormModel } from 'interfaces';
import { useCallback, useState } from 'react';
import { MutationFunction } from 'react-query';

type Key = {
  [key: string]: () => void;
};

export const useCreateBand = () => {
  const api = useRequest();

  const handleCreateBand = useCallback(
    async (data: ModalBandFormModel) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        const keys: Key = {
          musics: () => formData.append(key, JSON.stringify(value)),
          albums: () => formData.append(key, JSON.stringify(value)),
          members: () => formData.append(key, JSON.stringify(value)),
          image: () => formData.append(key, (data.image as unknown) as string),
          genres: () => formData.append(key, JSON.stringify(data.genres)),
        };

        const keyOnKeys = Object.keys(keys).find(k => k === key);

        if (!keyOnKeys) {
          return formData.append(key, String(value));
        }

        keys[key]();
      });

      await api.post(BANDS.BASE, formData);
    },
    [api],
  );

  return { handleCreateBand };
};

export const useUpdateAvatar = () => {
  const api = useRequest();
  const [isPending, setIsPending] = useState(false);

  const handleUpdateAvatar = async (image: File) => {
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append('avatar', image);
      const {
        data: { avatar },
      } = await api.patch<{ avatar: string }>(USERS.AVATAR, formData);

      return avatar;
    } finally {
      setIsPending(false);
    }
  };

  const handleAvatarMutate = useMutateUser(
    USERS.BASE,
    handleUpdateAvatar as MutationFunction<string>,
  );

  return { handleAvatarMutate, isPending };
};
