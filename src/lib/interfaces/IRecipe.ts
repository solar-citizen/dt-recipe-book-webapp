export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
}

export interface IRecipeDetails {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string[];
  strArea: string;
  strCategory: string;
  ingredients: { ingredient: string; measure: string }[];
}

export interface ISimpleRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}