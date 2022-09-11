---
title: Divider 分割线
nav:
  title: 布局组件
  path: /layout-components
  order: 2
group:
  title: Divider 分割线
  path: /divider
  order: 1
---

```tsx
import React from 'react';
import { Divider } from 'HDesign';
export default () => {
  return (
    <div>
      <div style={{ height: 100 }}>
        <Divider height={80} gap={16} />
      </div>
      <Divider direction="horizontal" width={100} gap={16} />
    </div>
  );
};
```

<API src="../index.tsx" />
