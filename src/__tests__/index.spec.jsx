/**
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 */

import React from 'react'

import '@testing-library/jest-dom'
import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom, {
  findComponentInstanceFor
} from '#react-component-instance'

describe('#react-component-instance', () => {
  class Component extends React.Component {
    render () {
      return (
        <div className='grand-parent'>
          <div className='parent'>
            <div className='child'>
              Text
            </div>
          </div>
        </div>
      )
    }
  }

  describe('`getComponentInstanceFrom`', () => {
    it('gets the instance', () => {
      const {
        container: {
          firstElementChild: element
        }
      } = render(
        <Component />
      )

      expect(getComponentInstanceFrom(element))
        .toBeInstanceOf(Component)
    })
  })

  describe('`findComponentInstanceFor`', () => {
    it('gets the instance', () => {
      const {
        container: {
          firstElementChild: element
        }
      } = render(
        <Component />
      )

      const child = element?.querySelector('.child')

      expect(findComponentInstanceFor(child, Component))
        .toBeInstanceOf(Component)
    })
  })
})
