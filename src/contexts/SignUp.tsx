import {
  createContext,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

import { MusicProps } from 'components/contexts/music/Music';

export type User = {
  name?: string;
  email?: string;
  password?: string;
  city?: string;
  band?: string;
  instrument?: string;
  musics?: MusicProps[];
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
    band: '',
    instrument: '',
  },
  setUser: () => undefined,
};

const SignUpContext = createContext<SignUpContextData>({
  user: initialValues.user,
  setUser: initialValues.setUser,
});
export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(initialValues.user);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
