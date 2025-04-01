import clsx from 'clsx'
import { ReactNode } from 'react'

import { SpinnerIcon, SpinnerVariants } from '@/src/components/molecules'

type LoadingErrorHandlerProps = {
  isLoading: boolean
  error: string
  children: ReactNode
  className?: string
  loadingSpinnerVariant?: SpinnerVariants
  loadingSpinnerSize?: number
}

const LoadingErrorHandler = ({
  isLoading,
  error,
  children,
  className = '',
  loadingSpinnerVariant = SpinnerVariants.Circle,
  loadingSpinnerSize = 40,
}: LoadingErrorHandlerProps) => {
  const statusContent = isLoading ? (
    <SpinnerIcon variant={loadingSpinnerVariant} size={loadingSpinnerSize} />
  ) : error ? (
    <div className='text-red-500'>{error}</div>
  ) : null

  if (statusContent) {
    return <div className={clsx('flex justify-center items-center w-full h-[80vh]', className)}>{statusContent}</div>
  }

  return <>{children}</>
}

export default LoadingErrorHandler
