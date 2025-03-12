import React from 'react'

import '@testing-library/jest-dom'
import {
  render
} from '@testing-library/react'

import getReactComponentInstanceFrom from '#react-component-instance/container'

describe('#react-component-instance/container', () => {
  describe('`getReactComponentInstanceFrom`', () => {
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

      expect(getReactComponentInstanceFrom(container))
        .toBeInstanceOf(Component)
    })
  })
})
