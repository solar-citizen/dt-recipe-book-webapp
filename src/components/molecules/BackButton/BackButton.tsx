import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { Icon } from '@/src/components/molecules'

import { getFilteredQueryString, hasNavigableParams } from './lib'

type BackButtonProps = {
  className?: string
  iconCls?: string
  onClick?: () => void
  preserveParams?: boolean
  searchParams?: URLSearchParams
}

const BackButton = ({
  className = '',
  iconCls = '',
  preserveParams = false,
  searchParams,
  onClick,
}: BackButtonProps) => {
  const navigate = useNavigate()

  if (!searchParams || (!hasNavigableParams(searchParams) && !onClick)) {
    return null
  }

  const handleClick = async () => {
    if (onClick) {
      onClick()
    } else if (preserveParams) {
      const queryString = getFilteredQueryString(searchParams)
      await navigate(queryString ? `/?${queryString}` : '/')
    } else {
      await navigate(-1)
    }
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={clsx(
        `
        flex items-center justify-center gap-2 p-4 rounded-full hover:bg-gray-200 
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300
        `,
        className,
      )}
    >
      <Icon variant='fontawesome' name='chevron-left' size='xl' className={clsx('text-gray-700 font-bold', iconCls)} />
      Back
    </button>
  )
}

export default BackButton
