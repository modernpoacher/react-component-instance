/**
 *  @typedef {import('@testing-library/react').RenderResult} RenderType
 *  @typedef {ReactComponentInstanceTypes.FiberRootNode} FiberRootNode
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 */

import {
  getContainerFiberFrom,
  getFiberFrom,
  getParentFiberFrom,
  getChildFiberFrom,
  getComponentInstance,
  getContainerInstance,
  isComponentType,
  traverseFiberParents
} from './utils/index.mjs'

/**
 *  @param {Element | null} [containerElement]
 *  @returns {FiberRootNode | null | undefined}
 */
export function getContainerFiberNodeFrom (containerElement) {
  if (containerElement instanceof HTMLElement) {
    return (
      getContainerFiberFrom(containerElement)
    )
  }

  throw new Error('Container is not an Element')
}

/**
 *  @param {Element | null} [element]
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
 *  @param {Element | null} [element]
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
 *  @param {Element | null} [element]
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
 *  @param {RenderType} render
 *  @returns {Element | null}
 */
export function getComponentElementFromRender ({
  container: {
    firstElementChild: componentElement
  }
}) {
  return componentElement
}

/**
 *  @param {RenderType} render
 *  @returns {Element | null}
 */
export function getContainerElementFromRender ({
  container: containerElement
}) {
  return containerElement
}

/**
 *  @param {Element | null} [containerElement]
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function getInstanceFromContainerElement (containerElement) {
  if (containerElement instanceof HTMLElement) {
    const containerFiber = getContainerFiberFrom(containerElement)

    if (containerFiber) {
      return (
        getContainerInstance(containerFiber)
      )
    }
  }

  return null
}

/**
 *  @param {Element | null} [componentElement]
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function getInstanceFromComponentElement (componentElement) {
  if (componentElement instanceof HTMLElement) {
    const parentFiber = getParentFiberFrom(componentElement)

    if (parentFiber) {
      return (
        getComponentInstance(parentFiber)
      )
    }
  }

  return null
}

/**
 *  @param {Element | null | undefined} element
 *  @param {(() => React.JSX.Element) | typeof React.Component} Component
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function findInstanceFor (element, Component) {
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
  }

  return null
}

/**
 *  @param {RenderType} render
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function getInstance (render) {
  const componentElement = getComponentElementFromRender(render)

  if (componentElement instanceof HTMLElement) {
    const parentFiber = getParentFiberFrom(componentElement)

    if (parentFiber) {
      return (
        getComponentInstance(parentFiber)
      )
    }
  }

  return null
}
