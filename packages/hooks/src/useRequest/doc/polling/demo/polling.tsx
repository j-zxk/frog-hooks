import React from 'react';
import { useRequest } from 'frogHooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  console.log('polling getUsername');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 3000,
    pollingWhenHidden: false,
  });

  return (
    <>
      <p>Username: {loading ? 'Loading' : data}</p>
      <button type="button" onClick={run}>
        start polling
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 16 }}>
        stop polling
      </button>
    </>
  );
};
