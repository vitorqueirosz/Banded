import { createContext, SetStateAction, useContext, useMemo, useState } from 'react';
import { UsersMusician } from 'useCases';

type MembersContextData = {
  members: UsersMusician[];
  setMembers: (value: SetStateAction<UsersMusician[]>) => void;
  selectedMembers: UsersMusician[];
  setSelectedMembers: (value: SetStateAction<UsersMusician[]>) => void;
  showDropdown: boolean;
  setShowDropdown: (value: SetStateAction<boolean>) => void;
  error: string;
  setError: (value: string) => void;
  reset: boolean;
  setReset: (value: boolean) => void;
}

const MembersContext = createContext({} as MembersContextData);

type MembersProviderProps = {
  children: React.ReactNode;
}

export const MembersProvider = ({ children }: MembersProviderProps) => {
  const [members, setMembers] = useState<UsersMusician[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<UsersMusician[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState('');
  const [reset, setReset] = useState(false);

  const contextValue = useMemo(() => ({
    members,
    setMembers,
    showDropdown,
    setShowDropdown,
    error,
    setError,
    selectedMembers,
    setSelectedMembers,
    reset,
    setReset,
  }), [
    members,
    setMembers,
    showDropdown,
    setShowDropdown,
    error,
    setError,
    selectedMembers,
    setSelectedMembers,
    reset,
    setReset,
  ]);

  return (
    <MembersContext.Provider value={contextValue}>
      {children}
    </MembersContext.Provider>
  );
};

export const useMembersContext = () => useContext(MembersContext);
