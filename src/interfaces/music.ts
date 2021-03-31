import { User } from 'contexts';

export type MusicProps = {
  music_name: string;
  artist_name: string;
  duration?: string;
  album_name: string;
  album_image: string;
}

type Music = {
  id: string;
  name: string;
  duration: string;
  genre: string;
}

type Album = {
  id: string,
  name: string,
  year: number,
  genre:string;
  musics: Music[],
}

export type BandResponse = {
  id: string;
  name: string;
  city: string;
  image: string;
  owner: User;
  albums: Album[];
  musics: Music[];
  members: User[];
  genres: {
    id: string;
    name: string;
  }[]
}

export type MusicianResponse = {
  user: User;
  bands: {
    name: string;
  },
  musics: MusicProps[];
}
