const usersPrefix = 'users';
const bandPrefix = 'band';
const genrePrefix = 'genres';

export const USERS = {
  BASE: usersPrefix,
  MUSICIAN: 'userMusician',
  BANDS: `${usersPrefix}/bands`,
  MUSICS: `${usersPrefix}/musics`,
  ALBUMS: `${usersPrefix}/albums`,
};

export const AUTH = {
  BASE: `${usersPrefix}/sessions`,
};

export const BANDS = {
  BASE: bandPrefix,
  BANDLIST: `${bandPrefix}/bandList`,
  BY_FILTERS: `${bandPrefix}/filters`,
};

export const GENRES = {
  BASE: `${genrePrefix}`,
};

export const CITIES = {
  BY_STATE: (uf: string) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
};
