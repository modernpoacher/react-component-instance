import React from 'react'

import '@testing-library/jest-dom'
import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from '#react-component-instance/container'

describe('#react-component-instance/container', () => {
  class Component extends React.Component {
    render () {
      return <div />
    }
  }

  describe('`getComponentInstanceFrom`', () => {
    it('gets the instance', () => {
      const {
        container
      } = render(
        <Component />
      )

      expect(getComponentInstanceFrom(container))
        .toBeInstanceOf(Component)
    })
  })
})
