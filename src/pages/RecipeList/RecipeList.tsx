import { Heading, PageContainer } from '@/src/components/atoms'
import { BackButton, LoadingErrorHandler, RecipeCard } from '@/src/components/molecules'

import { getPageTitle, useFilteredRecipes } from './lib'

const RecipeList = () => {
  const { recipes, error, isLoading, searchParams } = useFilteredRecipes()

  return (
    <LoadingErrorHandler isLoading={isLoading} error={error}>
      <PageContainer>
        <BackButton searchParams={searchParams} />

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
