class Route<T> {
  public base: string;

  public children: T;

  constructor(base: string, children: T) {
    this.base = base;
    this.children = children;
  }

  setLink = (key: keyof T) => {
    const baseURL = this.base.replace('/', '');

    return `/${baseURL}/${this.children[key]}`;
  };
}

export const ROUTES = {
  app: new Route('/', {
    home: 'home',
  }),
  auth: new Route('login', {
    base: '/',
  }),
  signUp: new Route('sign-up', {
    base: '/',
    secondStep: 'second-step',
    thirdStep: 'third-step',
    fourthStep: 'fourth-step',
  }),
  profile: new Route('profile', {
    base: '/',
  }),
  search: new Route('search', {
    base: '/',
  }),
} as const;
