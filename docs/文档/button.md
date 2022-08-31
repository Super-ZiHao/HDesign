# Button 按钮

```tsx
import React from 'react';
import { Button } from 'HDesign';
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
        <Button type="warning" animation>
          Warning
        </Button>
        <Button type="danger" animation>
          Danger
        </Button>
      </div>

      <h3>轻量</h3>
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

      <h3>禁用</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button type="success" disabled>
          Success
        </Button>
        <Button type="warning" disabled>
          Warning
        </Button>
        <Button type="danger" disabled>
          Danger
        </Button>
      </div>
    </>
  );
};
```

<API src="../../src/Button/index.tsx" />
