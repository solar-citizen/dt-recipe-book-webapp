import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RecipeAPI } from '@/src/api'
import { IRecipe, useFetch } from '@/src/lib'

import { RecipeFiltersType, RecipeFilterTypes } from '../../lib'

export const useFilteredRecipes = (): {
  recipes: IRecipe[] | null
  error: string
  isLoading: boolean
  filters: RecipeFiltersType
  searchParams: URLSearchParams
} => {
  const [searchParams] = useSearchParams()

  // Extract filters from search parameters
  const filters = useMemo<RecipeFiltersType>(
    () => ({
      [RecipeFilterTypes.INGREDIENT]: searchParams.get(RecipeFilterTypes.INGREDIENT) || undefined,
      [RecipeFilterTypes.COUNTRY]: searchParams.get(RecipeFilterTypes.COUNTRY) || undefined,
      [RecipeFilterTypes.CATEGORY]: searchParams.get(RecipeFilterTypes.CATEGORY) || undefined,
    }),
    [searchParams],
  )

  // Fetch recipes based on the filters
  const fetchRecipes = useCallback(() => RecipeAPI.getRecipes(filters), [filters])

  const { data: recipes, error, isLoading } = useFetch(fetchRecipes, [searchParams])

  return {
    recipes,
    error,
    isLoading,
    filters,
    searchParams,
  }
}
