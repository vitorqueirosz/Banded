import { useRef } from 'react';

export const useDebounce = <T extends unknown[]>(
  func: (...args: T) => void,
  wait: number,
) => {
  const argsRef = useRef<T>();
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const clearTimeOut = () => timer.current && clearTimeout(timer.current);

  return (...args: T) => {
    argsRef.current = args;
    clearTimeOut();

    setTimeout(() => {
      argsRef.current && func(...argsRef.current);
    }, wait);
  };
};
