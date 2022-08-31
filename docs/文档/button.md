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
        <Button type="primary" animation>Primary</Button>
        <Button type="success" animation>Success</Button>
        <Button type="info" animation>Info</Button>
        <Button type="warning" animation>Warning</Button>
        <Button type="danger" animation>Danger</Button>
      </div>
      <h3>轻量</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button animation>Default</Button>
        <Button type="primary" disabled animation>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="info" animation>Info</Button>
        <Button type="warning" animation>Warning</Button>
        <Button type="danger" animation>Danger</Button>
      </div>
      <h3>禁用</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button animation>Default</Button>
        <Button type="primary" disabled >Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="info" disabled>Info</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="danger" disabled>Danger</Button>
      </div>
    </>
  )
};
```

