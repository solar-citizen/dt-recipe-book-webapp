import { JSX } from 'react'

import { CompactCard, FullCard } from '@/src/components/molecules'

import { CardVariant, Recipe } from './types'

export const createRecipeCard = (recipe: Recipe, variant: CardVariant, className: string): JSX.Element => {
  const cardComponents = {
    compact: <CompactCard recipe={recipe} className={className} />,
    full: <FullCard recipe={recipe} className={className} />,
  }

  return cardComponents[variant]
}
