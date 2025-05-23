// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { history } from 'dumi';
import React, { useState, useLayoutEffect, useCallback, type ReactNode } from 'react';
import { RawIntlProvider, createIntl, createIntlCache } from '/Users/zhangxiaokun/workBase/personal/frog-hooks/node_modules/.pnpm/react-intl@7.1.10_react@18.3.1_typescript@5.8.2/node_modules/react-intl';
import { useIsomorphicLayoutEffect } from '/Users/zhangxiaokun/workBase/personal/frog-hooks/node_modules/.pnpm/dumi@2.4.18_@babel+core@7.26.10_@swc+helpers@0.5.1_@types+node@22.13.14_eslint@8.57.1_l_e7748234c7c4b132be9e44d0e471201d/node_modules/dumi/dist/client/theme-api/utils.js'
import { locales, messages } from './config';

const cache = createIntlCache();

const LocalesContainer: FC<{ children: ReactNode }> = (props) => {
  const getIntl = useCallback(() => {
    const base = ""
    const matched = locales.slice().reverse().find((locale) => (
      'suffix' in locale
        // suffix mode
        ? history.location.pathname.replace(/([^/])\/$/, '$1').endsWith(locale.suffix)
        // base mode
        : history.location.pathname.replace(/([^/])\/$/, '$1')
          .startsWith(base + locale.base)
    ));
    let locale = matched ? matched.id : locales[0].id;
    // using query on demos
    if(history.location.pathname.startsWith(base + '/~demos')){
        const params = new URLSearchParams(history.location.search);
        // match the locale of the query
        if (params.get('locale')){
          locale = params.get('locale');
        }
    }
    const localeMessages = messages[locale] || {};

    // append internal message, for use intl as string template util
    localeMessages['$internal.edit.link'] = undefined;

    localeMessages['$internal.api.sourceLink'] = undefined;

    return createIntl({ locale, messages: localeMessages }, cache);
  }, []);
  const [intl, setIntl] = useState(() => getIntl());

  useIsomorphicLayoutEffect(() => {
    return history.listen(() => {
      setIntl(getIntl());
    });
  }, []);

  return <RawIntlProvider value={intl} key={intl.locale}>{props.children}</RawIntlProvider>;
}

export function i18nProvider(container: Element) {
  return React.createElement(LocalesContainer, null, container);
}
