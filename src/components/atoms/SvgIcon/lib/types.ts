import { type SVGProps } from 'react'

export type SvgElementProps =
  | { type: 'path'; props: SVGProps<SVGPathElement> }
  | { type: 'circle'; props: SVGProps<SVGCircleElement> }
  | { type: 'rect'; props: SVGProps<SVGRectElement> }
  | { type: 'line'; props: SVGProps<SVGLineElement> }
  | { type: 'ellipse'; props: SVGProps<SVGEllipseElement> }
  | { type: 'polygon'; props: SVGProps<SVGPolygonElement> }
  | { type: 'polyline'; props: SVGProps<SVGPolylineElement> }
