const usersPrefix = 'users';
const bandPrefix = 'band';
const genrePrefix = 'genres';
const messagesPrefix = 'messages';
const chatPrefix = 'chats';

export const USERS = {
  BASE: usersPrefix,
  MUSICIAN: 'userMusician',
  BANDS: `${usersPrefix}/bands`,
  MUSICS: 'userMusics',
  ALBUMS: 'userAlbums',
  CHATS: chatPrefix,
  USER_CHATS: `${chatPrefix}`,
  SEARCH: `${usersPrefix}/search`,
  AVATAR: `${usersPrefix}/avatar`,
};

export const MESSAGES = {
  BASE: messagesPrefix,
  LATEST_MESSAGES: (chatId: string) =>
    `${messagesPrefix}/latest-messages/${chatId}`,
};

export const AUTH = {
  BASE: `${usersPrefix}/sessions`,
};

export const BANDS = {
  BASE: bandPrefix,
  BANDLIST: `${bandPrefix}/bandList`,
  BY_FILTERS: `${bandPrefix}/filters`,
};

export const SOCKET = {
  NEW_MESSAGE: 'new-message',
  SENDED_MESSAGE: 'sended-message',
  JOIN_PRIVATE_CHANNEL: 'join-private-channel',
  JOINNED_PRIVATE_CHANNEL: 'joinned-private-channel',
};

export const GENRES = {
  BASE: `${genrePrefix}`,
};

export const CITIES = {
  BY_STATE: (uf: string) =>
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
};
