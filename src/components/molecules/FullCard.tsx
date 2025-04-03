import { Link } from 'react-router-dom'

import { Heading } from '@/src/components/atoms'
import { CardProps } from '@/src/components/molecules'
import { AppRoutes } from '@/src/lib'

const { recipes } = AppRoutes

const FullCard = ({ recipe }: CardProps) => {
  const isFullRecipe = 'strCategory' in recipe || 'strArea' in recipe

  return (
    <Link
      key={recipe.idMeal}
      to={`${recipes.route}/${recipe.idMeal}`}
      className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
    >
      <img loading='lazy' src={recipe.strMealThumb} alt={recipe.strMeal} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <Heading level={3} className='text-xl font-semibold mb-2'>
          {recipe.strMeal}
        </Heading>
        {isFullRecipe && recipe.strCategory && <p className='text-gray-600'>Category: {recipe.strCategory}</p>}
        {isFullRecipe && recipe.strArea && <p className='text-gray-600'>Cuisine: {recipe.strArea}</p>}
      </div>
    </Link>
  )
}

export default FullCard
