import useLatest from '../../useLatest';
import useMemoizedFn from '../../useMemoizedFn';
import useMount from '../../useMount';
import useUnmount from '../../useUnmount';
import useUpdate from '../../useUpdate';
import isDev from '../../utils/isDev';
import Fetch from './Fetch';
import type { Options, Plugin, Result, Service } from './types';
import { useMemo } from 'react';

function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = [],
) {
  const { manual = false, ...rest } = options;

  if (isDev) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn(
        `expected defaultParams is array, got ${typeof options.defaultParams}`,
      );
    }
  }

  const fetchOptions = {
    manual,
    ...rest,
  };

  const serviceRef = useLatest(service);

  const update = useUpdate();

  const fetchInstance = useMemo(() => {
    const initState = plugins
      .map((p) => {
        return p?.onInit?.(fetchOptions);
      })
      .filter(Boolean);

    return new Fetch<TData, TParams>(
      serviceRef,
      fetchOptions,
      update,
      Object.assign({}, ...initState),
    );
  }, []);

  fetchInstance.options = fetchOptions;

  fetchInstance.pluginImpls = plugins.map((p) => {
    return p(fetchInstance, fetchOptions);
  });

  useMount(() => {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      const params = fetchInstance.state.params || options.defaultParams || [];
      fetchInstance.run(...params);
    }
  });

  useUnmount(() => {
    fetchInstance.cancel();
  });

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  } as Result<TData, TParams>;
}

export default useRequestImplement;
