/**
 *  @typedef {ReactComponentInstanceTypes.FiberRootNode} FiberRootNode
 */

import {
  getContainerFiberFrom
} from '#react-component-instance/common'

/**
 *  @param {Element | null | undefined} container
 *  @returns {FiberRootNode | null | undefined}
 */
export function getContainerFiberNodeFrom (container) {
  if (container instanceof HTMLElement) {
    return (
      getContainerFiberFrom(container)
    )
  }

  throw new Error('Container is not an Element')
}

/**
 *  @param {{ container: { firstElementChild: Element | null } }} component
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
 *  @param {Element | null | undefined} container
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export default function getComponentInstanceFrom (container) {
  if (container instanceof HTMLElement) {
    const fiberNode = getContainerFiberFrom(container)

    if (fiberNode) {
      const {
        stateNode: {
          current: {
            child: {
              stateNode
            }
          }
        }
      } = fiberNode

      return stateNode
    }

    throw new Error('Component instance is not found')
  }

  throw new Error('Container is not an Element')
}
