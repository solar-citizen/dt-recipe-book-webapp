import { ReactNode } from 'react'

type LoadingErrorHandlerProps = {
  isLoading: boolean
  error: string
  children: ReactNode
}

const LoadingErrorHandler = ({ isLoading, error, children }: LoadingErrorHandlerProps) => {
  if (isLoading) return <div className='text-center'>Loading...</div>
  if (error) return <div className='text-red-500'>{error}</div>

  return <>{children}</>
}

export default LoadingErrorHandler
