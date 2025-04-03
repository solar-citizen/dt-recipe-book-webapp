import { memo, type SVGProps } from 'react'

import { createSvgElement, SvgElementPropsType } from './lib'

export type SvgIconProps = SVGProps<SVGSVGElement> & {
  elements?: SvgElementPropsType[]
  size?: string | number
  color?: string
  className?: string
  viewBox?: string
  ariaHidden?: boolean
  ariaLabel?: string
  title?: string
}

const SvgIcon = ({
  elements,
  size = '20px',
  color,
  className,
  title,
  viewBox = '0 0 24 24',
  ariaHidden = true,
  ref,
  ...rest
}: SvgIconProps) => {
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

      {elements?.map((element, index) => createSvgElement(element, index, color))}
    </svg>
  )
}

export default memo(SvgIcon)
