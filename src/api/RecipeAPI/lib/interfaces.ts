export interface IMealResponse {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;

  [key: `strIngredient${number}`]: string | undefined;

  [key: `strMeasure${number}`]: string | undefined;
}

export interface IMealAPIResponse {
  meals?: IMealResponse[];
}