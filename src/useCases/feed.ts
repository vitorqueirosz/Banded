import { BANDS, USERS } from 'constants/endpoints';
import { User } from 'interfaces';
import { useFetch } from 'hooks/useFetch';

export type BandParams = {
  city: string;
};

export type BandResponse = {
  id: string;
  name: string;
  city: string;
  image: string;
  owner: User;
  albums: number;
  musics: number;
  members?: number;
  genres: {
    id: string;
    name: string;
  }[];
};

export type MusicianResponse = {
  id: string;
  name: string;
  city: string;
  bands: number;
  musics: number;
  albums: number;
  instrument: string;
};

export const useBands = (params: BandParams) =>
  useFetch<BandResponse[]>(BANDS.BANDLIST, {
    params,
  });

export const useMusicians = (params: BandParams) =>
  useFetch<MusicianResponse[]>(USERS.MUSICIAN, { params });
