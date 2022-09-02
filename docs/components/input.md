# Input 输入框

```tsx
import React, { useState } from 'react';
import { Input } from 'HDesign';
export default () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <h3>基本用法</h3>
      <Input
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

<API src="../../src/Input/index.tsx" />
