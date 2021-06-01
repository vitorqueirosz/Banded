import { NestedValue } from 'react-hook-form';
import { Genre, Music } from 'interfaces';
import { Option } from 'components/form';
import { Image } from './core';

export type User = {
  id: string;
  name?: string;
  avatar?: string;
  email?: string;
  password?: string;
  city: string;
  instrument?: string;
  bands: number;
  albums: number;
  musics?: number;
};

export type AlbumMusic = Pick<Music, 'name' | 'duration'> & {
  genre: Option;
};

export type AlbumOnBand = {
  id: string;
  image: Image;
  name: string;
  year_release: string;
  music: AlbumMusic;
  previewImage?: string;
  checkImage?: string;
  musics: AlbumMusic[];
  genre: Option;
};

export type ModalBandFormModel = {
  name: string;
  city: string;
  genres: NestedValue<Genre[]>;
  members: string;
  image: {
    image: File;
    previewImage: string;
  };
  album: AlbumOnBand;
  music: AlbumMusic;
};
