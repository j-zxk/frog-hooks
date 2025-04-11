import React from 'react';
import { useRequest } from 'frogHooks';
import Mock from 'mockjs';
import { message } from 'antd';

function getUsername(): Promise<string> {
  console.log('polling getUsername error');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(Mock.mock('@name')));
    }, 1000);
  });
}

export default () => {
  const { data, error, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 3000,
    pollingWhenHidden: false,
    pollingErrorRetryCount: 3,
    manual: true,
    onError: (error) => {
      message.error(error.message);
    },
  });

  return (
    <>
      <p>Username: {loading ? 'Loading' : data}</p>
      <button type="button" onClick={run}>
        start
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 16 }}>
        stop
      </button>
    </>
  );
};
