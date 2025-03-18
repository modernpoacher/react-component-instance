/**
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 *  @typedef {ReactComponentInstanceTypes.FiberRootNode} FiberRootNode
 */

/**
 *  @param {PropertyKey} key
 *  @returns {boolean}
 */
export function isReactFiberKey (key) {
  return String(key).startsWith('__reactFiber$')
}

/**
 *  @param {PropertyKey} key
 *  @returns {boolean}
 */
export function isReactPropsKey (key) {
  return String(key).startsWith('__reactProps$')
}

/**
 *  @param {PropertyKey} key
 *  @returns {boolean}
 */
export function isReactContainerFiberKey (key) {
  return String(key).startsWith('__reactContainer$')
}

/**
 *  @param {Element} element
 *  @returns {string | undefined}
 */
export function getReactFiberKey (element) {
  return (
    Object.keys(element)
      .find(isReactFiberKey)
  )
}

/**
 *  @param {Element} element
 *  @returns {string | undefined}
 */
export function getReactPropsKey (element) {
  return (
    Object.keys(element)
      .find(isReactPropsKey)
  )
}

/**
 *  @param {Element} element
 *  @returns {string | undefined}
 */
export function getReactContainerFiberKey (element) {
  return (
    Object.keys(element)
      .find(isReactContainerFiberKey)
  )
}

/**
 *  @param {Element} element
 *  @returns {FiberNode | null | undefined}
 */
export function getFiberFrom (element) {
  const key = getReactFiberKey(element)

  if (key) {
    const { // @ts-expect-error
      [key]: fiber
    } = element

    return fiber
  }

  throw new Error('Fiber is not found')
}

/**
 *  @param {Element} element
 *  @returns {FiberNode | null | undefined}
 */
export function getParentFiberFrom (element) {
  const key = getReactFiberKey(element)

  if (key) {
    const { // @ts-expect-error
      [key]: {
        return: fiber
      }
    } = element

    return fiber
  }

  throw new Error('Fiber is not found')
}

/**
 *  @param {Element} element
 *  @returns {FiberNode | null | undefined}
 */
export function getChildFiberFrom (element) {
  const key = getReactFiberKey(element)

  if (key) {
    const { // @ts-expect-error
      [key]: {
        child: fiber
      }
    } = element

    return fiber
  }

  throw new Error('Fiber is not found')
}

/**
 *  @param {Element} element
 *  @returns {FiberRootNode | null | undefined}
 */
export function getContainerFiberFrom (element) {
  const key = getReactContainerFiberKey(element)

  if (key) {
    const { // @ts-expect-error
      [key]: fiber
    } = element

    return fiber
  }

  throw new Error('Fiber is not found')
}

/**
 *  @param {FiberNode} fiber
 *  @returns {FiberNode | null | undefined}
 */
export function getParentFiber ({ return: parentFiber }) {
  return parentFiber
}

/**
 *  @param {FiberNode} fiber
 *  @returns {FiberNode | null | undefined}
 */
export function getChildFiber ({ child: childFiber }) {
  return childFiber
}

/**
 *  @param {FiberNode} fiber
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function getComponentInstance ({ stateNode: instance }) {
  return instance
}

/**
 *  @param {(() => React.JSX.Element) | typeof React.Component} Component
 *  @param {FiberNode} fiber
 *  @returns {boolean}
 */
export function isComponentType (Component, { type }) {
  return Component === type
}

/**
 *  @param {(() => React.JSX.Element) | typeof React.Component} Component
 *  @returns {(fiber: FiberNode) => boolean}
 */
export function getIsComponentType (Component) {
  return function isComponentType ({ type }) {
    return Component === type
  }
}

/**
 *  @param {FiberNode} fiber
 *  @returns {Generator<FiberNode | null | undefined, null, unknown>}
 */
export function * traverseFiberParents (fiber) {
  let currentFiber = getParentFiber(fiber)

  while (currentFiber) {
    yield currentFiber

    if (currentFiber) {
      currentFiber = getParentFiber(currentFiber)
    }
  }

  return null
}
