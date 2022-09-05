---
title: Button 按钮
nav:
  title: 功能组件
  path: /components
  order: 1
group:
  title: Button 按钮
  path: /button
  order: 1
---

### 基本用法

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
};
```

### 轻量按钮

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button plain>Default</Button>
      <Button type="primary" plain>
        Primary
      </Button>
      <Button type="success" plain>
        Success
      </Button>
      <Button type="warning" plain>
        Warning
      </Button>
      <Button type="danger" plain>
        Danger
      </Button>
    </div>
  );
};
```

### 特殊状态

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button type="success" disabled>
        禁用
      </Button>
      <Button type="success" loading>
        加载
      </Button>
      <Button type="success" animation>
        点击动画
      </Button>
    </div>
  );
};
```

### 自定义按钮主题

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button color="pink" plain animation>
        DIY-1
      </Button>
      <Button color="green" plain animation>
        DIY-2
      </Button>
      <Button color="#376aff" plain animation>
        DIY-3
      </Button>
    </div>
  );
};
```

### 按钮组

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <ButtonGroup>
      <Button>Default</Button>
      <Button>Warning</Button>
    </ButtonGroup>
  );
};
```

<API src='../index.tsx'></API>

<!-- <API src="./index.ts" exports='["ButtonProps", "ButtonGroupProps"]' /> -->
