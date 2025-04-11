/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数
 */

import React from 'react';
import { useBoolean, useUnmount } from 'frog-hooks';
import { message } from 'antd';

function MyComponent() {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>hello world!</p>;
}

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
