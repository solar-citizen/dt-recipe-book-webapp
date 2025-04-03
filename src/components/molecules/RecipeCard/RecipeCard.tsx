import { CardVariant, createRecipeCard, Recipe } from './lib'

type RecipeCardProps = {
  recipe: Recipe
  variant?: CardVariant
  className?: string
}

const RecipeCard = ({ recipe, variant = 'full', className = '' }: RecipeCardProps) => {
  return createRecipeCard(recipe, variant, className)
}

export default RecipeCard
