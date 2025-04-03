import { IRecipe, ISimpleRecipe } from '@/src/lib'

export type CardVariant = 'full' | 'compact'

export type CardProps = { recipe: IRecipe | ISimpleRecipe; className?: string }
export type Recipe = IRecipe | ISimpleRecipe
