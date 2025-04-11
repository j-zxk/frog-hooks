import { defineConfig } from 'dumi';

// const menus = [
//   {
//     title: '生命周期',
//     children: ['useUnmount', 'useUnmountedRef'],
//   },
//   {
//     title: '状态',
//     children: [
//       'useBoolean',
//       'useCookieState',
//       'useDebounce',
//       'useGetState',
//       'useLocalStorageState',
//       'useMap',
//       'usePrevious',
//       'useResetState',
//       'useSafeState',
//       'useSessionStorageState',
//       'useSet',
//       'useSetState',
//       'useToggle',
//       'useThrottle',
//     ],
//   },
//   {
//     title: 'Effect',
//     children: ['useDebounceFn', 'useThrottleFn', 'useUpdateEffect'],
//   },
//   {
//     title: '进阶',
//     children: ['useLatest', 'useMemoizedFn'],
//   },
// ];

const menus = [
  {
    title: '生命周期',
    children: ['useUnmount'],
  },
  {
    title: '请求',
    children: [
      'useRequest/doc/index',
      'useRequest/doc/basic',
      'useRequest/doc/loadingDelay',
      'useRequest/doc/polling',
      'useRequest/doc/ready',
      'useRequest/doc/refreshDeps',
      'useRequest/doc/refreshOnWindowFocus',
      'useRequest/doc/debounce',
      'useRequest/doc/throttle',
      'useRequest/doc/cache',
      'useRequest/doc/retry',
    ],
  },
  {
    title: '状态',
    children: ['useToggle', 'useBoolean', 'useDebounce', 'useThrottle'],
  },
  {
    title: 'Effect',
    children: ['useDebounceFn', 'useThrottleFn', 'useUpdateEffect'],
  },
  {
    title: '进阶',
    children: ['useLatest', 'useMemoizedFn'],
  },
];

export default defineConfig({
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/frog-hooks/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  title: 'frog hooks',
  mode: 'site',
  // favicon: '/encode-hooks/avatar.png',
  // logo: '/encode-hooks/avatar.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    frogHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
});
