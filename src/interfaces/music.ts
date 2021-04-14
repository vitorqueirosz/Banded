import { User } from 'interfaces';

export type MusicProps = {
  music_name: string;
  duration_ms: string;
}

export type Music = {
  id: string;
  name: string;
  duration: string;
  genre: string;
}

export type AlbumPayload = {
  album_image: File;
} & Omit<Album, 'album_image'>;

export type Album = {
  id: string,
  album_image?: string,
  album_name: string,
  year_release:string;
  musics: MusicProps[];
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
