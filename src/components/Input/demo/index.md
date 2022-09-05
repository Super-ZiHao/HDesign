---
title: Input 输入框
nav:
  title: 功能组件
  path: /components
  order: 1
group:
  title: Input 输入框
  path: /input
  order: 2
---

```tsx
import React, { useState } from 'react';
import { Input } from 'HDesign';
export default () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <h3>基本用法</h3>
      <Input
        placeholder="123"
        onEnter={(value) => {
          console.log(value);
        }}
        onFocus={(value) => console.log(value)}
        onBlur={(value) => console.log(value)}
      />
    </>
  );
};
```

<API src="../index.tsx" />
