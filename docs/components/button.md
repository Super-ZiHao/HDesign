# Button 按钮

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
        <Button type="warning">
          Warning
        </Button>
        <Button type="danger">
          Danger
        </Button>
      </div>

      <h3>轻量</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button plain animation>Default</Button>
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

      <h3>按钮组</h3>
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Warning</Button>
        <Button>Danger</Button>
      </ButtonGroup>
    </>
  );
};
```

<API src="../../src/Button/index.tsx" />
