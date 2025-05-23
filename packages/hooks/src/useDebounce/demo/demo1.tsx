/**
 * title: 基础用法
 * desc: DebouncedValue 只会在输入结束 500ms 后变化。
 */

import React, { useState } from 'react';
import { useDebounce } from 'frog-hooks';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Typed value"
        style={{ width: 200 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </>
  );
};
