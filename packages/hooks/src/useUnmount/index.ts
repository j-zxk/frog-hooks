import { useEffect } from 'react';
import { useLatest } from 'frogHooks';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

function useUnmount(fn: () => void) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useLatest(fn);

  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
}

export default useUnmount;
