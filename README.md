# react-component-instance

Get a React class component instance from its `DOM` elements

```javascript
import getInstance from 'react-component-instance'
```

## With `@testing-library/react`

**Note** that for use with _Testing Library_ import from `react-component-instance/container`

```javascript
import getInstance from 'react-component-instance/container'

import {
  render
} from '@testing-library/react'

const {
  container
} = render(
  <Component />
)

const instance = getInstance(container)
```
