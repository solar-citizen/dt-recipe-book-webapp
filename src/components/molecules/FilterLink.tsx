import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { AppRoutes } from '@/src/routes'

const { recipes } = AppRoutes

type FilterLinkProps = {
  filterType: 'ingredient' | 'country'
  filterValue: string
  className?: string
  children: ReactNode
}

const FilterLink = ({ filterType, filterValue, className = '', children }: FilterLinkProps) => {
  const to = `${recipes.route}?${filterType}=${encodeURIComponent(filterValue)}`
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default FilterLink
