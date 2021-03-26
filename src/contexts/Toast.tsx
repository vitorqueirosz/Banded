import { createContext, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { Toast } from 'components/structure';

export type ToastProps = {
  title: 'Success' | 'Error' | '';
  type: 'success' | 'error' | '';
  description: string;
}

type ToastContextData = {
  toast: ToastProps;
  setToast: (toast: SetStateAction<ToastProps>) => void;
  showToast: boolean;
  setShowToast: (boolean: SetStateAction<boolean>) => void;
};

const initialValues: ToastContextData = {
  toast: {
    title: 'Success',
    description: 'Sucesso ao salvar',
    type: 'success',
  },
  setToast: () => undefined,
  showToast: true,
  setShowToast: () => undefined,
};

export const ToastContext = createContext<ToastContextData>(initialValues);

export const ToastProvider = ({ children }: { children: React.ReactNode}) => {
  const [toast, setToast] = useState(initialValues.toast);
  const [showToast, setShowToast] = useState(initialValues.showToast);

  useEffect(() => {
    if (toast.title) {
      setTimeout(() => {
        setShowToast(true);
      }, 2500);
    }

    return () => clearTimeout();
  }, [toast.title]);

  // useEffect(() => {
  //   if (showToast) {
  //     setTimeout(() => {
  //       setShowToast(false);
  //       setToast({} as ToastProps);
  //     }, 2500);
  //   }

  //   return () => clearTimeout();
  // }, [showToast]);

  const value = useMemo(
    () => ({
      toast,
      setToast,
      showToast,
      setShowToast,
    }), [toast, setToast, showToast, setShowToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast
        {...toast}
        show={showToast}
        handleCloseToast={() => setShowToast(false)}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
