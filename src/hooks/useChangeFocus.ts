/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

export const useChangeFocus = (cb: () => void) => {
  const currentFocus = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleChangeFocus = (event: any) => {
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
