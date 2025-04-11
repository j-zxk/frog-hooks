/**
 * title: 修改用户名
 * desc: 在这个例子中，我们尝试修改用户名。
 */

import React, { useState } from 'react';
import { useRequest } from 'frogHooks';
import { message } from 'antd';

function changeUsername(
  username: string,
): Promise<{ success: boolean; username: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, username });
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');

  const { data, error, loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        message.success(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
      <p>Username: {data?.username}</p>
    </div>
  );
};
