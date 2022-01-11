import { useRef, useEffect, useLayoutEffect } from 'react';

type effectHookType = typeof useEffect | typeof useLayoutEffect;

export const createUpdateEffect: (hook: effectHookType) => effectHookType =
  (hook) => (effect, deps) => {
    const isMounted = useRef(false);

    // // for react-refresh
    // hook(() => {
    //   return () => {
    //     isMounted.current = false;
    //   };
    // }, []);

    hook(() => {
      if (isMounted.current) {
        effect();
      } else {
        isMounted.current = true;
      }
    }, deps);
  };

export const useUpdateEffect = createUpdateEffect(useEffect);
export const useLayoutUpdateEffect = createUpdateEffect(useLayoutEffect)

// export default function useRerenderEffect<
//   T extends (...args: any[]) => any,
//   U extends any[]
// >(f: T, deps: U) {
//   const didMount = useRef(false)

//   useEffect(() => {
//     if (didMount.current) {
//       f()
//     } else {
//       didMount.current = true
//     }
//   }, deps)
// }
