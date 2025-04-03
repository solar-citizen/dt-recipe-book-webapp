import { createElement, JSX, SVGProps } from 'react'

import { SvgElementPropsType } from './types'

const tagMap: Record<SvgElementPropsType['type'], keyof JSX.IntrinsicElements> = {
  path: 'path',
  circle: 'circle',
  rect: 'rect',
  line: 'line',
  ellipse: 'ellipse',
  polygon: 'polygon',
  polyline: 'polyline',
}

export const createSvgElement = (
  element: SvgElementPropsType,
  index: number,
  defaultColor?: string,
): JSX.Element | null => {
  const Tag = tagMap[element.type]

  const { props } = element

  const newProps: SVGProps<SVGElement> =
    element.type === 'line'
      ? { ...props, stroke: props.stroke ?? defaultColor }
      : { ...props, fill: props.fill ?? defaultColor, stroke: props.stroke ?? defaultColor }

  return createElement(Tag, { key: index, ...newProps })
}
