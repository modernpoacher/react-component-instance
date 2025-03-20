# react-component-instance

Get a React class component instance from its `DOM` element

```javascript
import {
  getInstance,
  findInstanceFor
} from 'react-component-instance'
```

## With `@testing-library/react`

```javascript
import {
  render
} from '@testing-library/react'

import {
  getInstance
} from 'react-component-instance'

describe('`getInstance`', () => {
  class Component extends React.Component {
    render () {
      return (
        <div className='grand-parent'>
          <div className='parent'>
            <div className='child'>
              TEXT
            </div>
          </div>
        </div>
      )
    }
  }

  it('gets the instance', () => {
    expect(getInstance(render(
      <Component />
    )))
      .toBeInstanceOf(Component)
  })
})
```

```javascript
import {
  render
} from '@testing-library/react'

import {
  findInstanceFor
} from 'react-component-instance'

describe('`findInstanceFor`', () => {
  class Component extends React.Component {
    render () {
      return (
        <div className='grand-parent'>
          <div className='parent'>
            <div className='child'>
              TEXT
            </div>
          </div>
        </div>
      )
    }
  }

  it('gets the instance', () => {
    const {
      container
    } = render(
      <Component />
    )

    const child  = container.querySelector('.child')

    expect(findInstanceFor(child, Component))
      .toBeInstanceOf(Component)
  })
})
```
