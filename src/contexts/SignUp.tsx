import { MusicProps, AlbumPayload } from 'interfaces/music';
import {
  createContext,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

export type UserMusician = {
  bandsName?: string;
  instrument?: string;
  musics?: MusicProps[];
  albums?: AlbumPayload[];
}

export type UserPayload = {
  name: string;
  avatar?: string;
  email: string;
  password: string;
  city: string;
  userMusician?: UserMusician;
};

type SignUpContextData = {
  user: UserPayload;
  setUser: (user: SetStateAction<UserPayload>) => void;
};

const initialValues: SignUpContextData = {
  user: {
    name: '',
    email: '',
    password: '',
    city: '',
    userMusician: {
      bandsName: '',
      instrument: '',
    },
  },
  setUser: () => undefined,
};

const SignUpContext = createContext<SignUpContextData>(initialValues);

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserPayload>(initialValues.user);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export const useSignUpContext = () => useContext(SignUpContext);
