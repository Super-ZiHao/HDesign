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

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <>
      <h3>基本用法</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button animation>Default</Button>
        <Button type="primary" animation>
          Primary
        </Button>
        <Button type="success" animation>
          Success
        </Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
    </>
  );
};
```

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <>
      <h3>轻量</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button plain animation>
          Default
        </Button>
        <Button type="primary" plain animation>
          Primary
        </Button>
        <Button type="success" plain animation>
          Success
        </Button>
        <Button type="warning" plain>
          Warning
        </Button>
        <Button type="danger" plain>
          Danger
        </Button>
      </div>
    </>
  );
};
```

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <>
      <h3>禁用</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button type="success" disabled>
          Success
        </Button>
        <Button type="warning" plain disabled>
          Warning
        </Button>
        <Button type="danger" plain disabled>
          Danger
        </Button>
      </div>
    </>
  );
};
```

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <>
      <h3>自适应颜色</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button color="pink" animation>
          DIY-1
        </Button>
        <Button color="pink" plain animation>
          DIY-1
        </Button>
        <Button color="green" animation>
          DIY-2
        </Button>
        <Button color="#376aff" animation>
          DIY-3
        </Button>
      </div>
    </>
  );
};
```

```tsx
import React from 'react';
import { Button, ButtonGroup } from 'HDesign';
export default () => {
  return (
    <>
      <h3>按钮组</h3>
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Warning</Button>
      </ButtonGroup>
    </>
  );
};
```

<API src='../index.tsx'></API>

<!-- <API src="./index.ts" exports='["ButtonProps", "ButtonGroupProps"]' /> -->
