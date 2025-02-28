import axios from 'axios'
import { baseURL } from '../lib'

export class RecipeAPI {
  static async getRecipes(filters?: {
    ingredient?: string;
    country?: string;
    category?: string;
  }) {
    try {
      const response = await axios.get(`${baseURL}/recipes`, {
        params: {
          ingredient: filters?.ingredient,
          country: filters?.country,
          category: filters?.category,
        },
      })
      return response.data.meals || []
    } catch (error) {
      console.error('Error fetching recipes:', error)
      return []
    }
  }

  static async getRecipeById(id: string) {
    try {
      const response = await axios.get(`${baseURL}/recipes/${id}`)
      if (!response.data.meals) new Error('Recipe not found')
      return this.parseRecipeDetails(response.data.meals[0])
    } catch (error) {
      console.error('Error fetching recipe:', error)
      return null
    }
  }

  private static parseRecipeDetails(meal: any) {
    const ingredients = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if (ingredient) ingredients.push({ ingredient, measure })
    }

    return {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strInstructions: meal.strInstructions.split('\n').filter(Boolean),
      strArea: meal.strArea,
      strCategory: meal.strCategory,
      ingredients,
    }
  }
}