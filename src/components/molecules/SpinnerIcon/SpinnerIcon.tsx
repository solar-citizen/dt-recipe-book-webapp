import { clsx } from 'clsx'

import { Icon } from '@/src/components/molecules'

import { SpinnerVariantConfig, SpinnerVariants, SvgElementTypes } from './lib'

type SpinnerProps = {
  variant?: SpinnerVariants
  size?: number
  color?: string
  className?: string
}

const { circle, rect } = SvgElementTypes

const spinnerOptions: Record<SpinnerVariants, SpinnerVariantConfig> = {
  [SpinnerVariants.Circle]: {
    elements: [
      { type: circle, props: { cx: 12, cy: 2.5, r: 1.5, opacity: 0.14 } },
      { type: circle, props: { cx: 16.75, cy: 3.77, r: 1.5, opacity: 0.29 } },
      { type: circle, props: { cx: 20.23, cy: 7.25, r: 1.5, opacity: 0.43 } },
      { type: circle, props: { cx: 21.5, cy: 12, r: 1.5, opacity: 0.57 } },
      { type: circle, props: { cx: 20.23, cy: 16.75, r: 1.5, opacity: 0.71 } },
      { type: circle, props: { cx: 16.75, cy: 20.23, r: 1.5, opacity: 0.86 } },
      { type: circle, props: { cx: 12, cy: 21.5, r: 1.5, opacity: 1 } },
    ],
    className: 'animate-spinner-circle',
  },
  [SpinnerVariants.Bar]: {
    elements: [
      { type: rect, props: { x: 1, y: 1, width: 6, height: 22, className: 'animate-spinner-bar' } },
      { type: rect, props: { x: 9, y: 1, width: 6, height: 22, className: 'animate-spinner-bar-2' } },
      { type: rect, props: { x: 17, y: 1, width: 6, height: 22, className: 'animate-spinner-bar-3' } },
    ],
  },
}

const SpinnerIcon = ({ variant, size, color, className }: SpinnerProps) => {
  const { elements, className: variantClass } = spinnerOptions[variant || SpinnerVariants.Circle]

  return (
    <Icon
      variant='svg'
      elements={elements}
      width={size || 20}
      height={size || 20}
      color={color || '#364153'}
      className={clsx(variantClass, className)}
    />
  )
}

export default SpinnerIcon
