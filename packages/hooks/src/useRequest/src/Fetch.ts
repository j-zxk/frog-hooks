import { isFunction } from '../../utils';
import type { MutableRefObject } from 'react';
import type {
  FetchState,
  Options,
  PluginReturn,
  Service,
  Subscribe,
} from './types';

export default class Fetch<TData, TParams extends any[]> {
  pluginImpls: PluginReturn<TData, TParams>[];

  count: number = 0;

  state: FetchState<TData, TParams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  };

  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: Partial<FetchState<TData, TParams>> = {},
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
      ...initState,
    };
  }

  setState(s: Partial<FetchState<TData, TParams>> = {}) {
    this.state = {
      ...this.state,
      ...s,
    };
    this.subscribe();
  }

  runPluginHandler(event: keyof PluginReturn<TData, TParams>, ...rest: any[]) {
    // @ts-ignore
    const r = this.pluginImpls.map((i) => i[event]?.(...rest)).filter(Boolean);
    return Object.assign({}, ...r);
  }

  async runAsync(...params: TParams): Promise<TData> {
    // 1.请求前
    // 2.请求中
    // 3.请求后
    this.count += 1;
    const currentCount = this.count;

    const {
      stopNow = false,
      returnNow = false,
      ...state
    } = this.runPluginHandler('onBefore', params);

    if (stopNow) {
      return new Promise(() => {});
    }

    this.setState({
      loading: true,
      params,
      ...state,
    });

    if (returnNow) {
      return Promise.resolve(state.data);
    }

    this.options.onBefore?.(params);

    try {
      let { servicePromise } = this.runPluginHandler(
        'onRequest',
        this.serviceRef.current,
        params,
      );

      if (!servicePromise) {
        servicePromise = this.serviceRef.current(...params);
      }

      const res = await servicePromise;

      if (currentCount !== this.count) {
        return new Promise(() => {});
      }

      this.setState({
        loading: false,
        data: res,
        error: undefined,
      });

      this.options.onSuccess?.(res, params);
      this.runPluginHandler('onSuccess', res, params);

      this.options.onFinally?.(params, res, undefined);
      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, res, undefined);
      }

      return res;
    } catch (err) {
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }

      this.setState({
        loading: false,
        data: undefined,
        error: err,
      });

      this.options.onError?.(err, params);
      this.runPluginHandler('onError', err, params);

      this.options.onFinally?.(params, undefined, err);
      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, undefined, err);
      }

      throw err;
    }
  }

  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.log(error);
      }
    });
  }

  cancel() {
    this.count += 1;
    this.setState({
      loading: false,
    });

    this.runPluginHandler('onCancel');
  }

  refresh() {
    // @ts-ignore
    this.run(...(this.state.params || []));
  }

  refreshAsync() {
    // @ts-ignore
    return this.runAsync(...(this.state.params || []));
  }

  mutate(data?: TData | ((oldData?: TData) => TData | undefined)) {
    const targetData = isFunction(data) ? data(this.state.data) : data;
    this.runPluginHandler('onMutate', targetData);
    this.setState({
      data: targetData,
    });
  }
}
