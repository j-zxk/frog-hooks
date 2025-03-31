// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { IConfigFromPluginsJoi } from "./pluginConfigJoi.d";

interface IConfigTypes {
    codeSplitting: {
    jsStrategy: "bigVendors" | "depPerChunk" | "granularChunks";
    jsStrategyOptions?: ({

} | undefined);
    cssStrategy?: ("mergeAll" | undefined);
    cssStrategyOptions?: ({

} | undefined);
};
    title: string;
    styles: Array<string | {
    src?: (string | undefined);
} | {
    content?: (string | undefined);
} | { [x: string]: any }>;
    scripts: Array<string | {
    src?: (string | undefined);
} | {
    content?: (string | undefined);
} | { [x: string]: any }>;
    routes: Array<{
    component?: (string | undefined);
    layout?: (false | undefined);
    path?: (string | undefined);
    redirect?: (string | undefined);
    routes?: IConfigTypes['routes'];
    wrappers?: (Array<string> | undefined);
} | { [x: string]: any }>;
    routeLoader: {
    moduleType: "esm" | "cjs";
};
    reactRouter5Compat: boolean | {

};
    presets: Array<string>;
    plugins: Array<string>;
    npmClient: "pnpm" | "tnpm" | "cnpm" | "yarn" | "npm";
    mountElementId: string;
    metas: Array<{
    charset?: (string | undefined);
    content?: (string | undefined);
    "http-equiv"?: (string | undefined);
    name?: (string | undefined);
} | { [x: string]: any }>;
    links: Array<{
    crossorigin?: (string | undefined);
    href?: (string | undefined);
    hreflang?: (string | undefined);
    media?: (string | undefined);
    referrerpolicy?: (string | undefined);
    rel?: (string | undefined);
    sizes?: (any | undefined);
    title?: (any | undefined);
    type?: (any | undefined);
} | { [x: string]: any }>;
    historyWithQuery: {

};
    history: {
    type: "browser" | "hash" | "memory";
};
    headScripts: Array<string | {
    src?: (string | undefined);
} | {
    content?: (string | undefined);
} | { [x: string]: any }>;
    esbuildMinifyIIFE: boolean;
    conventionRoutes: {
    base?: (string | undefined);
    exclude?: (Array<any> | undefined);
};
    conventionLayout: boolean;
    base: string;
    analyze: {

};
    writeToDisk: boolean;
    theme: { [x: string]: any };
    targets: { [x: string]: any };
    svgr: { [x: string]: any };
    svgo: { [x: string]: any } | boolean;
    stylusLoader: { [x: string]: any };
    styleLoader: { [x: string]: any };
    srcTranspilerOptions: {
    esbuild?: ({ [x: string]: any } | undefined);
    swc?: ({ [x: string]: any } | undefined);
};
    srcTranspiler: "babel" | "esbuild" | "swc";
    sassLoader: { [x: string]: any };
    runtimePublicPath: {

};
    purgeCSS: { [x: string]: any };
    publicPath: string;
    proxy: { [x: string]: any } | Array<any>;
    postcssLoader: { [x: string]: any };
    outputPath: string;
    normalCSSLoaderModules: { [x: string]: any };
    mfsu: {
    cacheDirectory?: (string | undefined);
    chainWebpack?: (((...args: any[]) => unknown) | undefined);
    esbuild?: (boolean | undefined);
    exclude?: (Array<string | any> | undefined);
    include?: (Array<string> | undefined);
    mfName?: (string | undefined);
    remoteAliases?: (Array<string> | undefined);
    remoteName?: (string | undefined);
    runtimePublicPath?: (boolean | undefined);
    shared?: ({ [x: string]: any } | undefined);
    strategy?: ("eager" | "normal" | undefined);
} | boolean;
    mdx: {
    loader?: (string | undefined);
    loaderOptions?: ({ [x: string]: any } | undefined);
};
    manifest: {
    basePath?: (string | undefined);
    fileName?: (string | undefined);
};
    lessLoader: { [x: string]: any };
    jsMinifierOptions: { [x: string]: any };
    jsMinifier: "esbuild" | "swc" | "terser" | "uglifyJs" | "none";
    inlineLimit: number;
    ignoreMomentLocale: boolean;
    https: {
    cert?: (string | undefined);
    hosts?: (Array<string> | undefined);
    http2?: (boolean | undefined);
    key?: (string | undefined);
};
    hash: boolean;
    forkTSChecker: { [x: string]: any };
    fastRefresh: boolean;
    extraPostCSSPlugins: Array<any>;
    extraBabelPresets: Array<string | Array<any>>;
    extraBabelPlugins: Array<string | Array<any>>;
    extraBabelIncludes: Array<string | any>;
    externals: { [x: string]: any } | string | ((...args: any[]) => unknown);
    esm: {

};
    devtool: "cheap-source-map" | "cheap-module-source-map" | "eval" | "eval-source-map" | "eval-cheap-source-map" | "eval-cheap-module-source-map" | "eval-nosources-cheap-source-map" | "eval-nosources-cheap-module-source-map" | "eval-nosources-source-map" | "source-map" | "hidden-source-map" | "hidden-nosources-cheap-source-map" | "hidden-nosources-cheap-module-source-map" | "hidden-nosources-source-map" | "hidden-cheap-source-map" | "hidden-cheap-module-source-map" | "inline-source-map" | "inline-cheap-source-map" | "inline-cheap-module-source-map" | "inline-nosources-cheap-source-map" | "inline-nosources-cheap-module-source-map" | "inline-nosources-source-map" | "nosources-source-map" | "nosources-cheap-source-map" | "nosources-cheap-module-source-map" | boolean;
    depTranspiler: "babel" | "esbuild" | "swc" | "none";
    define: { [x: string]: any };
    deadCode: {
    context?: (string | undefined);
    detectUnusedExport?: (boolean | undefined);
    detectUnusedFiles?: (boolean | undefined);
    exclude?: (Array<string> | undefined);
    failOnHint?: (boolean | undefined);
    patterns?: (Array<string> | undefined);
};
    cssPublicPath: string;
    cssMinifierOptions: { [x: string]: any };
    cssMinifier: "cssnano" | "esbuild" | "parcelCSS" | "none";
    cssLoaderModules: { [x: string]: any };
    cssLoader: { [x: string]: any };
    copy: Array<{
    from: string;
    to: string;
} | string>;
    checkDepCssModules?: boolean;
    cacheDirectoryPath: string;
    babelLoaderCustomize: string;
    autoprefixer: { [x: string]: any };
    autoCSSModules: boolean;
    alias: { [x: string]: any };
    crossorigin: boolean | {
    includes?: (Array<any> | undefined);
};
    esmi: {
    cdnOrigin: string;
    shimUrl?: (string | undefined);
};
    exportStatic: {
    extraRoutePaths?: (((...args: any[]) => unknown) | Array<string> | undefined);
    ignorePreRenderError?: (boolean | undefined);
};
    favicons: Array<string>;
    helmet: boolean;
    icons: {
    autoInstall?: ({

} | undefined);
    defaultComponentConfig?: ({

} | undefined);
    alias?: ({

} | undefined);
    include?: (Array<string> | undefined);
};
    mock: {
    exclude?: (Array<string> | undefined);
    include?: (Array<string> | undefined);
};
    mpa: {
    template?: (string | undefined);
    layout?: (string | undefined);
    getConfigFromEntryFile?: (boolean | undefined);
    entry?: ({

} | undefined);
};
    phantomDependency: {
    exclude?: (Array<string> | undefined);
};
    polyfill: {
    imports?: (Array<string> | undefined);
};
    routePrefetch: {
    defaultPrefetch?: ("none" | "intent" | "render" | "viewport" | undefined);
    defaultPrefetchTimeout?: (number | undefined);
};
    terminal: {

};
    tmpFiles: boolean;
    clientLoader: {

};
    routeProps: {

};
    ssr: {
    serverBuildPath?: (string | undefined);
    serverBuildTarget?: ("express" | "worker" | undefined);
    platform?: (string | undefined);
    builder?: ("esbuild" | "webpack" | "mako" | undefined);
    __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: ({
    pureApp?: (boolean | undefined);
    pureHtml?: (boolean | undefined);
} | undefined);
    useStream?: (boolean | undefined);
};
    lowImport: {
    libs?: (Array<any> | undefined);
    css?: (string | undefined);
};
    vite: {

};
    apiRoute: {
    platform?: (string | undefined);
};
    monorepoRedirect: boolean | {
    srcDir?: (Array<string> | undefined);
    exclude?: (Array<any> | undefined);
    peerDeps?: (boolean | undefined);
};
    test: {

};
    clickToComponent: {
    /** 默认情况下，点击将默认编辑器为vscode, 你可以设置编辑器 vscode 或者 vscode-insiders */
    editor?: (string | undefined);
};
    legacy: {
    buildOnly?: (boolean | undefined);
    nodeModulesTransform?: (boolean | undefined);
    checkOutput?: (boolean | undefined);
};
    /** 设置 babel class-properties 启用 loose 
 @doc https://umijs.org/docs/api/config#classpropertiesloose */
    classPropertiesLoose: boolean | {

};
    ui: {

};
    mako: {
    plugins?: (Array<{
    load?: (((...args: any[]) => unknown) | undefined);
    generateEnd?: (((...args: any[]) => unknown) | undefined);
}> | undefined);
    px2rem?: ({
    root?: (number | undefined);
    propBlackList?: (Array<string> | undefined);
    propWhiteList?: (Array<string> | undefined);
    selectorBlackList?: (Array<string> | undefined);
    selectorWhiteList?: (Array<string> | undefined);
    selectorDoubleList?: (Array<string> | undefined);
} | undefined);
    experimental?: ({
    webpackSyntaxValidate?: (Array<string> | undefined);
} | undefined);
    flexBugs?: (boolean | undefined);
    optimization?: ({
    skipModules?: (boolean | undefined);
} | undefined);
};
    hmrGuardian: boolean;
    forget: {
    ReactCompilerConfig?: ({

} | undefined);
};
    verifyCommit: {
    scope?: (Array<string> | undefined);
    allowEmoji?: (boolean | undefined);
};
    run: {
    globals?: (Array<string> | undefined);
};
};

type PrettifyWithCloseable<T> = {
  [K in keyof T]: T[K] | false;
} & {};

export type IConfigFromPlugins = PrettifyWithCloseable<
  IConfigFromPluginsJoi & Partial<IConfigTypes>
>;
