import { MusicProps } from 'interfaces/music';
import {
  createContext,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

export type User = {
  name?: string;
  avatar?: string;
  email?: string;
  password?: string;
  city: string;
  userMusician?: {
    bandsName?: string;
    instrument?: string;
    musics?: MusicProps[];
  }
};

type SignUpContextData = {
  user: User;
  setUser: (user: SetStateAction<User>) => void;
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
  const [user, setUser] = useState<User>(initialValues.user);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
