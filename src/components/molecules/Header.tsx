import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

type HeaderProps = {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <header className={clsx('flex items-center justify-between p-4 bg-white border-b border-gray-200', className)}>
      <div className='flex items-center'>
        <NavLink to='/' className='text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors'>
          Recipe Book
        </NavLink>
      </div>

      <nav>
        <NavLink to='/' className='px-4 py-2 text-gray-600 hover:text-gray-800 hover:underline transition-colors'>
          Home
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
