import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { RecipeAPI } from '@/src/api'
import { Heading, PageContainer } from '@/src/components/atoms'
import { FilterLink, LoadingErrorHandler, RecipeCard } from '@/src/components/molecules'
import { ISimpleRecipe, useFetch } from '@/src/lib'

const RecipeInfo = () => {
  const { id } = useParams<{ id: string }>()

  const fetchRecipe = useCallback(async () => {
    if (id) return await RecipeAPI.getRecipeById(id)
  }, [id])

  const { data: recipe, error: recipeError, isLoading: isRecipeLoading } = useFetch(fetchRecipe, [id])

  const fetchCategoryRecipes = useCallback(async () => {
    if (!recipe) return []
    const fetchedRecipes = await RecipeAPI.getRecipes({ category: recipe.strCategory })
    return fetchedRecipes.filter((categoryRecipe: ISimpleRecipe) => categoryRecipe.idMeal !== id)
  }, [recipe, id])

  const {
    data: categoryRecipes,
    error: categoryError,
    isLoading: isCategoryLoading,
  } = useFetch(fetchCategoryRecipes, [recipe])

  const loading = isRecipeLoading || isCategoryLoading
  const error = recipeError || categoryError

  return (
    <LoadingErrorHandler isLoading={loading} error={error}>
      <PageContainer>
        <div className='flex flex-col lg:flex-row gap-8 max-h-[85vh]'>
          <section className='flex-1 overflow-auto'>
            <div className='flex flex-col md:flex-row gap-6 mb-8'>
              <img
                src={recipe?.strMealThumb}
                alt={recipe?.strMeal}
                className='w-full md:w-1/2 h-96 object-cover rounded-lg'
              />

              <div className='flex-1'>
                <Heading level={1} className='font-bold mb-4'>
                  {recipe?.strMeal}
                </Heading>

                <FilterLink
                  filterType='country'
                  filterValue={recipe?.strArea as string}
                  className='text-blue-600 hover:text-blue-800 text-lg'
                >
                  {recipe?.strArea} cuisine
                </FilterLink>
              </div>
            </div>

            <div className='mb-8 max-h-[25vh] overflow-auto border border-gray-200 rounded-lg p-2'>
              <Heading level={2} className='mb-4'>
                Instructions
              </Heading>

              {recipe?.strInstructions.map((step: string, index: number) => (
                <p key={index} className='mb-3'>
                  {step}
                </p>
              ))}
            </div>

            <div className='mb-8'>
              <Heading level={2} className='mb-4'>
                Ingredients
              </Heading>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {recipe?.ingredients.map(({ ingredient, measure }) => (
                  <FilterLink
                    key={`${recipe.idMeal}-${ingredient}`}
                    filterType='ingredient'
                    filterValue={ingredient}
                    className='bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors text-left'
                  >
                    <span className='font-medium'>{ingredient}</span>
                    <span className='text-gray-600 ml-2'>{measure}</span>
                  </FilterLink>
                ))}
              </div>
            </div>
          </section>

          <aside className='lg:w-80 overflow-auto'>
            <Heading level={3} className='mb-4'>
              More {recipe?.strCategory} Recipes
            </Heading>

            <div className='space-y-4'>
              {categoryRecipes?.map(recipe => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} variant='compact' />
              ))}
            </div>
          </aside>
        </div>
      </PageContainer>
    </LoadingErrorHandler>
  )
}

export default RecipeInfo
