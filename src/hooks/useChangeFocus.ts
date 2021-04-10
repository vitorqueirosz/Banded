import { useEffect, useRef } from 'react';

export const useChangeFocus = (cb: () => void) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentFocus = useRef<any>();

  useEffect(() => {
    const handleChangeFocus = (event: globalThis.MouseEvent) => {
      if (currentFocus.current
        && !currentFocus.current.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener('mousedown', handleChangeFocus);

    return () => document.removeEventListener('mousedown', handleChangeFocus);
  }, [cb]);

  return currentFocus;
};
