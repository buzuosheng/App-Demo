import { useMemo, useRef } from 'react';

type noop = (...args: any[]) => any;

function useMemoFn<T extends noop>(fn: T) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(`expect function type, but got ${typeof fn}`);
    }
  }

  const fnRef = useRef<T>(fn);
  const memoFn = useRef<T>();

  fnRef.current = useMemo(() => fn, [fn]);
  if (!memoFn.current) {
    memoFn.current = function (...args) {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      return fnRef.current.apply(this, args);
    } as T;
  }

  return memoFn.current;
}

export default useMemoFn;
