import { RefObject, useEffect, useMemo } from 'react';

const options = {
  threshold: 1.0,
};

export const useInfiniteScroll = (ref: RefObject<HTMLDivElement>, callback: () => void) => {
  const intersectionObserver = useMemo(() => new IntersectionObserver(entries => {
    const radio = entries[0].intersectionRatio;

    radio >= 1 && callback();
  }, options), [callback]);

  useEffect(() => {
    ref.current && intersectionObserver.observe(ref.current);

    return () => intersectionObserver.disconnect();
  }, [intersectionObserver, ref]);
};
