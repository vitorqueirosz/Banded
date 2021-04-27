import { useCallback, useRef } from 'react';

const options = {
  threshold: 1.0,
};

export const useInfiniteScroll = (hasMore: boolean, callback: () => void) => {
  const observerRef = useRef(
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options),
  );

  const lastRef = useCallback((node) => {
    if (!node) return;

    if (!hasMore && observerRef.current) {
      return observerRef.current.disconnect();
    }

    if (observerRef) {
      observerRef.current.disconnect();
    }

    if (node) observerRef.current.observe(node);
  }, [hasMore]);

  return lastRef;
};
