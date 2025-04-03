import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { colorClasses, IconColor, iconMap, IconName, IconSize, sizeClasses } from './lib'

export type FaIconProps = {
  name: IconName
  size?: IconSize
  color?: IconColor
  className?: string
}

const FaIcon = ({ name, size = 'md', color = 'secondary', className = '' }: FaIconProps) => {
  const iconDefinition = iconMap[name]

  return <FontAwesomeIcon icon={iconDefinition} className={clsx(sizeClasses[size], colorClasses[color], className)} />
}

export default FaIcon
