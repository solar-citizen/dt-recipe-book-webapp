import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type FilterLinkProps = {
  filterType: 'ingredient' | 'country'
  filterValue: string
  className?: string
  children: ReactNode
}

const FilterLink = ({ filterType, filterValue, className = '', children }: FilterLinkProps) => {
  const to = `/recipes?${filterType}=${encodeURIComponent(filterValue)}`
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default FilterLink
