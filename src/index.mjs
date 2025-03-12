/**
 *  @typedef {ReactComponentInstanceTypes.FiberNode} FiberNode
 */

/**
 *  @param {PropertyKey} key
 *  @returns {boolean}
 */
function isReactFiberKey (key) {
  return String(key).startsWith('__reactFiber$')
}

/**
 *  @param {FiberNode} fiberNode
 *  @returns {Generator<FiberNode, void, unknown>}
 */
function * traverseFiberNodeTree (fiberNode) {
  let currentNode = fiberNode

  while (true) {
    yield currentNode

    currentNode = currentNode.return
  }
}

/**
 *  @param {Element | null | undefined} element
 *  @param {(() => React.JSX.Element) | typeof React.Component} Component
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export function findReactComponentInstanceFor (element, Component) {
  if (element instanceof HTMLElement) {
    const key = (
      Object.keys(element)
        .find(isReactFiberKey)
    )

    if (key) {
      const { // @ts-expect-error
        [key]: fiberNode
      } = element

      if (fiberNode) {
        for (const fiber of traverseFiberNodeTree(fiberNode)) {
          const {
            type
          } = fiber

          if (type === Component) {
            const {
              stateNode
            } = fiber

            return stateNode
          }
        }
      }
    }

    throw new Error('Component instance is not found')
  }

  throw new Error('Element is not an Element')
}

/**
 *  @param {Element | null} element
 *  @returns {React.Component<any, any, any> | HTMLElement | Text | null}
 */
export default function getReactComponentInstanceFrom (element) {
  if (element instanceof HTMLElement) {
    const key = (
      Object.keys(element)
        .find(isReactFiberKey)
    )

    if (key) {
      const { // @ts-expect-error
        [key]: fiberNode
      } = element

      if (fiberNode) {
        /**
         *  `return` is the component which owns `element`
         */
        const {
          return: {
            stateNode
          }
        } = fiberNode

        return stateNode
      }
    }

    throw new Error('Component instance is not found')
  }

  throw new Error('Element is not an Element')
}
