import React, { useRef, useMemo } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const ref = useRef<T>(fn);
  ref.current = useMemo(() => {
    return fn;
  }, [fn]);

  const memorizedFn = useRef<PickFunction<T>>();
  if (!memorizedFn.current) {
    memorizedFn.current = function (this, ...args) {
      return ref.current.apply(this, ...args);
    };
  }

  return memorizedFn.current as T;
}

export default useMemoizedFn;
