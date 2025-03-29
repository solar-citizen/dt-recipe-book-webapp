import { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className='container mx-auto px-4 py-8'>{children}</div>
}

export default PageContainer
