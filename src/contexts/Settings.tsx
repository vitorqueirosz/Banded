import { createContext, useContext, useMemo, useState } from 'react';

type SettingsContextData = {
  hasRelations: boolean;
  setHasRelations: (value: boolean) => void;
}

const initialValues: SettingsContextData = {
  hasRelations: true,
  setHasRelations: () => undefined,
};

const SettingsContext = createContext<SettingsContextData>(initialValues);

export const SettingsProvider = ({ children }: { children: React.ReactNode}) => {
  const [hasRelations, setHasRelations] = useState(initialValues.hasRelations);

  const value = useMemo(
    () => ({
      hasRelations, setHasRelations,
    }), [hasRelations, setHasRelations],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
