import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RecipeAPI } from '@/src/api'
import { Heading, PageContainer } from '@/src/components/atoms'
import { LoadingErrorHandler, RecipeCard } from '@/src/components/molecules'
import { useFetch } from '@/src/lib'

import { getPageTitle, type RecipeFiltersType, RecipeFilterTypes } from './lib'

const RecipeList = () => {
  const [searchParams] = useSearchParams()

  const filters = useMemo<RecipeFiltersType>(
    () => ({
      [RecipeFilterTypes.INGREDIENT]: searchParams.get(RecipeFilterTypes.INGREDIENT) || undefined,
      [RecipeFilterTypes.COUNTRY]: searchParams.get(RecipeFilterTypes.COUNTRY) || undefined,
      [RecipeFilterTypes.CATEGORY]: searchParams.get(RecipeFilterTypes.CATEGORY) || undefined,
    }),
    [searchParams],
  )

  const fetchRecipes = useCallback(() => RecipeAPI.getRecipes(filters), [filters])

  const { data: recipes, error: recipesErr, isLoading: isPendingRecipes } = useFetch(fetchRecipes, [searchParams])

  return (
    <LoadingErrorHandler isLoading={isPendingRecipes} error={recipesErr}>
      <PageContainer>
        <Heading level={1} className='mb-8 text-center'>
          {getPageTitle(searchParams)}
        </Heading>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {recipes?.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} variant='full' />
          ))}
        </div>
      </PageContainer>
    </LoadingErrorHandler>
  )
}

export default RecipeList
