import type React from 'react'

type FiberRootNode = ReactComponentInstanceTypes.FiberRootNode
type FiberNode = ReactComponentInstanceTypes.FiberNode

export function isReactFiberKey (key: PropertyKey) : boolean

export function isReactPropsKey (key: PropertyKey) : boolean

export function isReactContainerFiberKey (key: PropertyKey): boolean

export function getReactFiberKey (element: Element): string | undefined

export function getReactPropsKey (element: Element): string | undefined

export function getReactContainerFiberKey (element: Element): string | undefined

export function getFiberFrom (element: Element): FiberNode | null | undefined

export function getParentFiberFrom (element: Element): FiberNode | null | undefined

export function getChildFiberFrom (element: Element): FiberNode | null | undefined

export function getContainerFiberFrom (element: Element): FiberNode | null | undefined

export function getParentFiber (fiber: FiberNode): FiberNode | null | undefined

export function getChildFiber (fiber: FiberNode): FiberNode | null | undefined

export function getComponentInstance (fiber: FiberNode): React.Component<any, any> | HTMLElement | Text | null

export function getContainerInstance (fiber: FiberRootNode): React.Component<any, any> | HTMLElement | Text | null

export function isComponentType (Component: (() => React.JSX.Element) | typeof React.Component, fiber: FiberNode): boolean

export function getIsComponentType (Component: (() => React.JSX.Element) | typeof React.Component): (fiber: FiberNode) => boolean

export function traverseFiberParents (fiber: FiberNode): Generator<FiberNode | null | undefined, null, unknown>
