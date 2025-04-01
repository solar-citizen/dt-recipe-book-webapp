import { memo, type SVGProps } from 'react'

import { SvgElementPropsType } from './lib'

export type IconProps = SVGProps<SVGSVGElement> & {
  elements: SvgElementPropsType[]
  size?: string | number
  color?: string
  className?: string
  viewBox?: string
  ariaHidden?: boolean
  ariaLabel?: string
  title?: string
}

const Icon = memo(
  ({
    elements,
    size = '20px',
    color,
    className,
    title,
    viewBox = '0 0 24 24',
    ariaHidden = true,
    ref,
    ...rest
  }: IconProps) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={viewBox}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-hidden={ariaHidden}
        role='img'
        {...rest}
      >
        {title && <title>{title}</title>}
        {elements.map((element, index) => {
          switch (element.type) {
            case 'path':
              return (
                <path
                  key={index}
                  {...element.props}
                  fill={element.props.fill || color}
                  stroke={element.props.stroke || color}
                />
              )
            case 'circle':
              return (
                <circle
                  key={index}
                  {...element.props}
                  fill={element.props.fill || color}
                  stroke={element.props.stroke || color}
                />
              )
            case 'rect':
              return (
                <rect
                  key={index}
                  {...element.props}
                  fill={element.props.fill || color}
                  stroke={element.props.stroke || color}
                />
              )
            case 'line':
              return <line key={index} {...element.props} stroke={element.props.stroke || color} />
            case 'ellipse':
              return (
                <ellipse
                  key={index}
                  {...element.props}
                  fill={element.props.fill || color}
                  stroke={element.props.stroke || color}
                />
              )
            case 'polygon':
              return (
                <polygon
                  key={index}
                  {...element.props}
                  fill={element.props.fill || color}
                  stroke={element.props.stroke || color}
                />
              )
            case 'polyline':
              return (
                <polyline
                  key={index}
                  {...element.props}
                  fill={element.props.fill || color}
                  stroke={element.props.stroke || color}
                />
              )
            default:
              return null
          }
        })}
      </svg>
    )
  },
)

Icon.displayName = 'Icon'

export default Icon
