/**
 *  @typedef {ReactComponentInstanceTypes.FiberRootNode} FiberRootNode
 */

/**
 *  @param {string} key
 *  @returns {boolean}
 */
function isReactContainerKey (key) {
  return key.startsWith('__reactContainer$')
}

/**
 *  @param {HTMLElement} container
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export default function getReactComponentInstanceFrom (container) {
  const key = (
    Object.keys(container)
      .find(isReactContainerKey)
  )

  if (key) {
    const { // @ts-expect-error
      [key]: fiberNode
    } = container

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
  }

  throw new Error('Component instance is not found')
}
