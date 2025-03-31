import { useCallback } from 'react'

import { RecipeAPI } from '@/src/api'
import { ISimpleRecipe, useFetch } from '@/src/lib'

export const useRecipeWithSimilarRecipes = (id: string | undefined) => {
  // First fetch - get recipe by ID
  const fetchRecipe = useCallback(async () => {
    if (id) return await RecipeAPI.getRecipeById(id)
  }, [id])

  const {
    data: recipe,
    error: recipeError,
    isLoading: isRecipeLoading,
    setData: setRecipe,
  } = useFetch(fetchRecipe, [id])

  // Second fetch - get related recipes from same category
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

  // Combine loading and error states
  const isLoading = isRecipeLoading || isCategoryLoading
  const error = recipeError || categoryError

  return {
    recipe,
    categoryRecipes,
    isLoading,
    error,
    setRecipe,
  }
}
