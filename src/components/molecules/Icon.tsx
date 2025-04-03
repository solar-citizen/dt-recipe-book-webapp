import { FaIcon, FaIconProps, SvgIcon, SvgIconProps } from '@/src/components/atoms'

type IconProps = ({ variant: 'fontawesome' } & FaIconProps) | ({ variant: 'svg' } & SvgIconProps)

const Icon = ({ variant, ...restProps }: IconProps) => {
  if (variant === 'fontawesome') return <FaIcon {...(restProps as FaIconProps)} />

  return <SvgIcon {...(restProps as SvgIconProps)} />
}

export default Icon
