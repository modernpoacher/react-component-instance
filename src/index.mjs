/**
 *  @typedef {import('@testing-library/react').RenderResult} RenderType
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 */

import {
  getFiberFrom,
  getParentFiberFrom,
  getChildFiberFrom,
  getComponentInstance,
  isComponentType,
  traverseFiberParents
} from '#react-component-instance/common'

/**
 *  @param {Element | null | undefined} element
 *  @param {(() => React.JSX.Element) | typeof React.Component} Component
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function findComponentInstanceFor (element, Component) {
  if (element instanceof HTMLElement) {
    const fiber = getFiberFrom(element)

    if (fiber) {
      if (isComponentType(Component, fiber)) {
        return (
          getComponentInstance(fiber)
        )
      }

      for (const parentFiber of traverseFiberParents(fiber)) {
        if (parentFiber) {
          if (isComponentType(Component, parentFiber)) {
            return (
              getComponentInstance(parentFiber)
            )
          }
        }
      }
    }

    throw new Error('Component instance is not found')
  }

  throw new Error('Element is not an Element')
}

/**
 *  @param {Element | null | undefined} element
 *  @returns {FiberNode | null | undefined}
 */
export function getFiberNodeFrom (element) {
  if (element instanceof HTMLElement) {
    return (
      getFiberFrom(element)
    )
  }

  throw new Error('Element is not an Element')
}

/**
 *  @param {Element | null | undefined} element
 *  @returns {FiberNode | null | undefined}
 */
export function getParentFiberNodeFrom (element) {
  if (element instanceof HTMLElement) {
    return (
      getParentFiberFrom(element)
    )
  }

  throw new Error('Element is not an Element')
}

/**
 *  @param {Element | null | undefined} element
 *  @returns {FiberNode | null | undefined}
 */
export function getChildFiberNodeFrom (element) {
  if (element instanceof HTMLElement) {
    return (
      getChildFiberFrom(element)
    )
  }

  throw new Error('Element is not an Element')
}

/**
 *  @param {RenderType} component
 *  @returns {Element | null}
 */
export function getComponentElement ({
  container: {
    firstElementChild: element
  }
}) {
  return element
}

/**
 *  @param {Element | null | undefined} element
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export default function getComponentInstanceFrom (element) {
  if (element instanceof HTMLElement) {
    const parentFiber = getParentFiberFrom(element)

    if (parentFiber) {
      return (
        getComponentInstance(parentFiber)
      )
    }

    throw new Error('Component instance is not found')
  }

  throw new Error('Element is not an Element')
}
