import { useFetch } from 'hooks/useFetch';
import { USERS } from 'constants/endpoints';
import { BandResponse } from './feed';

type UserBands = {
  userBands: BandResponse[];
}

export const useUserBands = () => useFetch<UserBands>(USERS.BANDS);

export const useUserAlbums = () => useFetch<UserBands>(USERS.ALBUMS);

export const useUserMusics = () => useFetch<UserBands>(USERS.MUSICS);
