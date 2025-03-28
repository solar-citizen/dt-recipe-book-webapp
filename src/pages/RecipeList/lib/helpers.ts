export type RecipeFilterKeyType = (typeof RecipeFilterTypes)[keyof typeof RecipeFilterTypes]
export type RecipeFiltersType = {
  [RecipeFilterTypes.INGREDIENT]?: string
  [RecipeFilterTypes.COUNTRY]?: string
  [RecipeFilterTypes.CATEGORY]?: string
}

export const RecipeFilterTypes = {
  INGREDIENT: 'ingredient',
  COUNTRY: 'country',
  CATEGORY: 'category',
} as const

export const getPageTitle = (searchParams: URLSearchParams) => {
  const getFilterTitle = (filterType: RecipeFilterKeyType): string | null => {
    return searchParams.get(filterType)
  }

  const ingredient = getFilterTitle(RecipeFilterTypes.INGREDIENT)
  if (ingredient) return `Recipes with ${ingredient}`

  const country = getFilterTitle(RecipeFilterTypes.COUNTRY)
  if (country) return `${country} Recipes`

  const category = getFilterTitle(RecipeFilterTypes.CATEGORY)
  if (category) return `${category} Recipes`

  return 'All Recipes'
}
