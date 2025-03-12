/**
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 */

import React from 'react'

import '@testing-library/jest-dom'
import {
  render
} from '@testing-library/react'

import getReactComponentInstanceFrom, {
  findReactComponentInstanceFor
} from '#react-component-instance'

describe('#react-component-instance', () => {
  class Component extends React.Component {
    render () {
      return (
        <div>
          <div>
            <div className='target' />
          </div>
        </div>
      )
    }
  }

  describe('`getReactComponentInstanceFrom`', () => {
    it('gets the instance', () => {
      const {
        container: {
          firstElementChild: element
        }
      } = render(
        <Component />
      )

      expect(getReactComponentInstanceFrom(element))
        .toBeInstanceOf(Component)
    })
  })

  describe('`findReactComponentInstanceFor`', () => {
    it('gets the instance', () => {
      const {
        container: {
          firstElementChild: element
        }
      } = render(
        <Component />
      )

      expect(findReactComponentInstanceFor(element?.querySelector('.target'), Component))
        .toBeInstanceOf(Component)
    })
  })
})
