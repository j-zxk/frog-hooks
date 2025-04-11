/**
 * title: 读取用户名称
 */

import React from 'react';
import { useRequest } from 'frogHooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export default () => {
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <p>failed to load</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return <p>Username: {data}</p>;
};
