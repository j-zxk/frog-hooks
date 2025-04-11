/**
 * title: 读取用户名称
 */

import React from 'react';
import { useRequest } from 'frog-hooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(Mock.mock('@name'));
      } else {
        reject(new Error('Failed to get username'));
      }
    }, 1000);
  });
}

export default () => {
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return <p>Username: {data}</p>;
};
