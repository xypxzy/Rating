import { handleSmoothScroll } from 'next/dist/shared/lib/router/router';
import { useEffect, useState } from 'react';

export const useScrollY = (): number => {
  const isBrowser = typeof window !== 'undefined';
  const [scrollY, setScollY] = useState<number>(0);
  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollY;
};
