const usersPrefix = 'users';
const bandPrefix = 'band';

export const USERS = {
  BASE: usersPrefix,
  MUSICIAN: 'userMusician',
};

export const AUTH = {
  BASE: `${usersPrefix}/sessions`,
};

export const BANDS = {
  BASE: `${bandPrefix}`,
  BANDLIST: `${bandPrefix}/bandList`,
};
