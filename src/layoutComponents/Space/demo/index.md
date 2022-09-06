---
title: Space 间距
nav:
  title: 布局组件
  path: /layout-components
  order: 2
group:
  title: Space 间距
  path: /space
  order: 2
---

```tsx
import React from 'react';
import { Button, Space } from 'HDesign';
export default () => {
  return (
    <Space gap={24} split="|" >
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
    </Space>
  );
};
```

<API src="../index.tsx" />
