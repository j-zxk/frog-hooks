/**
 * title: 基础用法
 * desc: 在组件首次渲染时，执行方法。
 */

import React from 'react';
import { useMount, useBoolean } from 'frog-hooks';
import { message } from 'antd';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
