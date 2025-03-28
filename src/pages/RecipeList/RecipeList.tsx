import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { RecipeAPI } from '@/src/api'
import { handleApiError, IRecipe } from '@/src/lib'

import { getPageTitle, type RecipeFiltersType, RecipeFilterTypes } from './lib'

const RecipeList = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const filters: RecipeFiltersType = {
          [RecipeFilterTypes.INGREDIENT]: searchParams.get(RecipeFilterTypes.INGREDIENT) || undefined,
          [RecipeFilterTypes.COUNTRY]: searchParams.get(RecipeFilterTypes.COUNTRY) || undefined,
          [RecipeFilterTypes.CATEGORY]: searchParams.get(RecipeFilterTypes.CATEGORY) || undefined,
        }

        const data = await RecipeAPI.getRecipes(filters)
        setRecipes(data)
      } catch (err) {
        setError(handleApiError(err))
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes().catch((err: unknown) => {
      console.error('Unhandled error in fetchRecipes:', handleApiError(err))
      setError(handleApiError(err))
    })
  }, [searchParams])

  if (loading) return <div className='text-center'>Loading...</div>
  if (error) return <div className='text-red-500'>{error}</div>

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>{getPageTitle(searchParams)}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {recipes.map(recipe => (
          <Link
            key={recipe.idMeal}
            to={`/recipes/${recipe.idMeal}`}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{recipe.strMeal}</h3>
              {recipe.strCategory && <p className='text-gray-600'>Category: {recipe.strCategory}</p>}
              {recipe.strArea && <p className='text-gray-600'>Cuisine: {recipe.strArea}</p>}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default RecipeList
