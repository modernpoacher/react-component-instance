import type React from 'react'
import type {
  RenderResult as RenderType
} from '@testing-library/react'

type FiberRootNode = ReactComponentInstanceTypes.FiberRootNode
type FiberNode = ReactComponentInstanceTypes.FiberNode

export function getContainerFiberNodeFrom (containerElement?: Element | null): FiberRootNode | null | undefined

export function getFiberNodeFrom (element?: Element | null): FiberNode | null | undefined

export function getParentFiberNodeFrom (element?: Element | null): FiberNode | null | undefined

export function getChildFiberNodeFrom (element?: Element | null): FiberNode | null | undefined

export function getComponentElementFromRender (render: RenderType): Element | null

export function getContainerElementFromRender (render: RenderType): Element | null

export function getInstanceFromContainerElement (containerElement?: Element | null): React.Component<any, any> | HTMLElement | Text | null

export function getInstanceFromComponentElement (componentElement?: Element | null): React.Component<any, any> | HTMLElement | Text | null

export function findInstanceFor (element: Element | null | undefined, Component: (() => React.JSX.Element) | typeof React.Component) : React.Component<any, any> | HTMLElement | Text | null

export function getInstance (render: RenderType): React.Component<any, any> | HTMLElement | Text | null
