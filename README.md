# react-component-instance

Get a React class component instance from its `DOM` element

```javascript
import getInstance from 'react-component-instance'
```

## With `@testing-library/react`

**Note** that for use with _Testing Library_ import from `react-component-instance/container`

```javascript
import {
  render
} from '@testing-library/react'

import getInstance from 'react-component-instance/container'

describe('`getInstance`', () => {
  class Component extends React.Component {
    render () {
      return <div />
    }
  }

  it('gets the instance', () => {
    const {
      container
    } = render(
      <Component />
    )

    expect(getInstance(container))
      .toBeInstanceOf(Component)
  })
})
```
