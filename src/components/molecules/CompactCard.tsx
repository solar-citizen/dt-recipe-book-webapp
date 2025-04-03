import { Link } from 'react-router-dom'

import { CardProps } from '@/src/components/molecules'
import { AppRoutes } from '@/src/lib'

const { recipes } = AppRoutes

const CompactCard = ({ recipe }: CardProps) => {
  return (
    <Link
      key={recipe.idMeal}
      to={`${recipes.route}/${recipe.idMeal}`}
      className='flex items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow'
    >
      <img
        loading='lazy'
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className='w-16 h-16 object-cover rounded mr-4'
      />
      <span className='font-medium'>{recipe.strMeal}</span>
    </Link>
  )
}

export default CompactCard
