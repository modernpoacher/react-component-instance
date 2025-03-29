/**
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 */

import React from 'react'

import '@testing-library/jest-dom'
import {
  render
} from '@testing-library/react'

import {
  getInstance,
  findInstanceFor,
  getContainerElementFromRender,
  getComponentElementFromRender,
  getInstanceFromContainerElement,
  getInstanceFromComponentElement
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

  describe('`getInstance`', () => {
    it('gets the instance', () => {
      expect(getInstance(render(
        <Component />
      )))
        .toBeInstanceOf(Component)
    })
  })

  describe('`findInstanceFor`', () => {
    it('gets the instance', () => {
      const {
        container
      } = render(
        <Component />
      )

      const child = container.querySelector('.child')

      expect(findInstanceFor(child, Component))
        .toBeInstanceOf(Component)
    })
  })

  describe('`getInstanceFromContainerElement`', () => {
    it('gets the instance', () => {
      expect(getInstanceFromContainerElement(getContainerElementFromRender(render(
        <Component />
      ))))
        .toBeInstanceOf(Component)
    })
  })

  describe('`getInstanceFromComponentElement`', () => {
    it('gets the instance', () => {
      expect(getInstanceFromComponentElement(getComponentElementFromRender(render(
        <Component />
      ))))
        .toBeInstanceOf(Component)
    })
  })
})
