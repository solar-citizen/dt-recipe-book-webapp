import { createElement, JSX, SVGProps } from 'react'

import { SvgElementProps } from './types'

const tagMap: Record<SvgElementProps['type'], keyof JSX.IntrinsicElements> = {
  path: 'path',
  circle: 'circle',
  rect: 'rect',
  line: 'line',
  ellipse: 'ellipse',
  polygon: 'polygon',
  polyline: 'polyline',
}

export const createSvgElement = (element: SvgElementProps, index: number, defaultColor?: string): JSX.Element => {
  const Tag = tagMap[element.type]

  const { props } = element

  const newProps: SVGProps<SVGElement> =
    element.type === 'line'
      ? { ...props, stroke: props.stroke ?? defaultColor }
      : { ...props, fill: props.fill ?? defaultColor, stroke: props.stroke ?? defaultColor }

  return createElement(Tag, { key: index, ...newProps })
}
