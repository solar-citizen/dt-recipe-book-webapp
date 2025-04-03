import {
  faCheck,
  faChevronLeft,
  faChevronRight,
  faTriangleExclamation,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

import { IconColor, IconName, IconSize } from './types'

export const iconMap: Record<IconName, IconDefinition> = {
  check: faCheck,
  danger: faTriangleExclamation,
  'chevron-left': faChevronLeft,
  'chevron-right': faChevronRight,
}

export const sizeClasses: Record<IconSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

export const colorClasses: Record<IconColor, string> = {
  primary: 'text-white',
  secondary: 'text-gray-500',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-cyan-500',
}
