import axios from 'axios'

import { baseURL, IRecipe, IRecipeDetails } from '@/src/lib'

import { IMealAPIResponse, IMealResponse } from './lib'

export const RecipeAPI = {
  async getRecipes(filters?: {
    ingredient?: string;
    country?: string;
    category?: string;
  }): Promise<IRecipe[]> {
    try {
      const response = await axios.get<IMealAPIResponse>(`${baseURL}/recipes`, {
        params: {
          ingredient: filters?.ingredient,
          country: filters?.country,
          category: filters?.category,
        },
      })

      return (response.data.meals || []).map((meal): IRecipe => ({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
        strCategory: meal.strCategory || '',
        strArea: meal.strArea || '',
      }))
    } catch (error) {
      console.error('Error fetching recipes:', error)
      return []
    }
  },

  async getRecipeById(id: string): Promise<IRecipeDetails | null> {
    try {
      const response = await axios.get<IMealAPIResponse>(`${baseURL}/recipes/${id}`)
      const meal = response.data.meals?.[0]
      if (!meal) return null
      return this.parseRecipeDetails(meal)
    } catch (error) {
      console.error('Error fetching recipe:', error)
      return null
    }
  },

  parseRecipeDetails(meal: IMealResponse): IRecipeDetails {
    const ingredients: { ingredient: string; measure: string }[] = []

    function getMealProp(key: `strIngredient${number}` | `strMeasure${number}`): string | undefined {
      return meal[key]
    }

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i.toString()}` as `strIngredient${number}`
      const measureKey = `strMeasure${i.toString()}` as `strMeasure${number}`

      const ingredient = getMealProp(ingredientKey)
      const measure = getMealProp(measureKey)

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : '',
        })
      }
    }

    return {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strInstructions: meal.strInstructions
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== ''),
      strArea: meal.strArea,
      strCategory: meal.strCategory,
      ingredients,
    }
  },


}