import type { DebouncedFunc, DebounceSettings } from 'lodash-es';
import { debounce } from 'lodash-es';
import { useEffect, useMemo, useRef } from 'react';
import type { Plugin } from '../types';

const useDebouncdPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { debounceWait, debounceLeading, debounceTrailing, debounceMaxWait },
) => {
  const debounceRef = useRef<DebouncedFunc<any>>();

  const options = useMemo(() => {
    const ret: DebounceSettings = {};
    if (debounceLeading !== undefined) {
      ret.leading = debounceLeading;
    }
    if (debounceTrailing !== undefined) {
      ret.trailing = debounceTrailing;
    }
    if (debounceMaxWait !== undefined) {
      ret.maxWait = debounceMaxWait;
    }
  }, [debounceLeading, debounceTrailing, debounceMaxWait]);

  useEffect(() => {
    if (debounceWait) {
      const _originRunAsync = fetchInstance.runAsync.bind(fetchInstance);

      debounceRef.current = debounce(
        (callback) => {
          callback();
        },
        debounceWait,
        options,
      );

      fetchInstance.runAsync = (...args) => {
        return new Promise((resolve, reject) => {
          debounceRef.current?.(() => {
            _originRunAsync(...args)
              .then(resolve)
              .catch(reject);
          });
        });
      };

      return () => {
        debounceRef.current?.cancel();
        fetchInstance.runAsync = _originRunAsync;
      };
    }
  }, [debounceWait, options]);

  if (!debounceWait) {
    return {};
  }

  return {
    onCancel: () => {
      debounceRef.current?.cancel();
    },
  };
};

export default useDebouncdPlugin;
