import { useRef } from 'react';
import useUpdateEffect from '../../../useUpdateEffect';
import type { Plugin } from '../types';

// support refreshDeps & ready
const useAutoRunPlugin: Plugin<any, any[]> = (
  fetchInstance,
  {
    manual,
    ready = true,
    defaultParams = [],
    refreshDeps = [],
    refreshDepsAction,
  },
) => {
  const hasAutoRunRef = useRef(false);
  hasAutoRunRef.current = false;

  useUpdateEffect(() => {
    if (!manual && ready) {
      hasAutoRunRef.current = true;
      fetchInstance.run(...defaultParams);
    }
  }, [ready]);

  useUpdateEffect(() => {
    if (hasAutoRunRef.current) {
      return;
    }
    if (!manual) {
      hasAutoRunRef.current = true;
      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        fetchInstance.refresh();
      }
    }
  }, [...refreshDeps]);

  return {
    onBefore: () => {
      if (!ready) {
        return {
          stopNow: true,
        };
      }
    },
  };
};

useAutoRunPlugin.onInit = ({ manual, ready = true }) => {
  return {
    loading: !manual && ready,
  };
};

export default useAutoRunPlugin;
