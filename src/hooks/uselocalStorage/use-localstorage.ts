import { Dispatch, useEffect, useState } from 'react';
import ms from 'ms';
import useMemoFn from './useMemoFn';
import { useUpdateEffect } from './useUpdateEffect';
import isBrowser from './isBrowser';

interface Options<T> {
  age: string;
  initialValue: T;
  prefix: string;
}

export function useLocalStorage<T>(
  key: string,
  _options?: Partial<Options<T>>
): [T | undefined, Dispatch<T>] {
  const options = {
    age: '7d',
    initialValue: undefined,
    prefix: 'Prefix:',
    ..._options,
  };
  const prefixKey = options.prefix + key;
  let storage: Storage | undefined;

  try {
    storage = isBrowser ? localStorage : undefined;
  } catch (err) {
    console.error(err);
  }

  function getStorageValue() {
    try {
      const storageValue = storage?.getItem(prefixKey);
      if (!storageValue) return;
      const isExpire = Date.now() > JSON.parse(storageValue).expireAt;
      if (isExpire) {
        storage?.removeItem(prefixKey);
        return;
      }
      return JSON.parse(storageValue);
    } catch (e) {
      console.error(e);
    }
  }

  const [value, setValue] = useState<T | undefined>(() => getStorageValue() || options.initialValue);

  useUpdateEffect(() => getStorageValue(), [prefixKey]);

  const UpdateValue = (newValue: T) => {
    setValue(newValue);
    const data = {
      value: newValue,
      expireAt: Date.now() + ms(options.age),
    };
    try {
      storage?.setItem(prefixKey, JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const storageValue = localStorage.getItem(prefixKey);
    if (!storageValue) {
      return;
    }
    const isExpire = Date.now() > JSON.parse(storageValue).expireAt;
    if (isExpire) {
      window.localStorage.removeItem(prefixKey);
    }
    const newValue = JSON.parse(storageValue).value;
    if (JSON.stringify(value) !== JSON.stringify(newValue)) {
      setValue(newValue);
    }
  });

  return [value, useMemoFn(UpdateValue)];
}
