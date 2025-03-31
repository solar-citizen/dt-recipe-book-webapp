import { Link } from 'react-router-dom'

import { Heading } from '@/src/components/atoms'
import { IRecipe, ISimpleRecipe } from '@/src/lib'

type RecipeCardProps = {
  recipe: IRecipe | ISimpleRecipe
  variant?: 'full' | 'compact'
}

const RecipeCard = ({ recipe, variant = 'full' }: RecipeCardProps) => {
  const isFullRecipe = 'strCategory' in recipe || 'strArea' in recipe

  if (variant === 'compact') {
    return (
      <Link
        key={recipe.idMeal}
        to={`/recipes/${recipe.idMeal}`}
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

  return (
    <Link
      key={recipe.idMeal}
      to={`/recipes/${recipe.idMeal}`}
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

export default RecipeCard
