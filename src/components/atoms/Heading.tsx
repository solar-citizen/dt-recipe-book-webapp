import { clsx } from 'clsx'
import { JSX, ReactNode } from 'react'

type HeadingLevel = 1 | 2 | 3

type HeadingProps = {
  children: ReactNode
  level?: HeadingLevel
  className?: string
}

const Heading = ({ children, level = 2, className = '' }: HeadingProps) => {
  const HeadingTag = `h${level.toString()}` as keyof JSX.IntrinsicElements
  const levelCls = { 1: 'text-2xl', 2: 'text-xl', 3: 'text-lg' }[level]
  return <HeadingTag className={clsx('font-medium text-gray-800', levelCls, className)}>{children}</HeadingTag>
}

export default Heading
