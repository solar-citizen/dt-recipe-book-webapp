import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { RecipeAPI } from '@/src/api'
import { IRecipeDetails, ISimpleRecipe } from '@/src/lib'

import styles from './RecipeInfo.module.css'

const RecipeInfo = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState<IRecipeDetails | null>(null)
  const [categoryRecipes, setCategoryRecipes] = useState<ISimpleRecipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          console.error('No recipe ID provided')
        }

        const recipeDetails = await RecipeAPI.getRecipeById(id || '0')
        if (!recipeDetails) {
          console.error('Recipe not found')
        }
        setRecipe(recipeDetails)

        const categoryRecipes = await RecipeAPI.getRecipes({
          category: recipeDetails?.strCategory,
        })
        setCategoryRecipes(categoryRecipes.filter((categoryRecipe: ISimpleRecipe) => categoryRecipe.idMeal !== id))
      } catch (err) {
        setError('Failed to fetch recipe details')
      } finally {
        setLoading(false)
      }
    }

    void fetchData()
  }, [id])

  const handleFilterClick = (type: 'ingredient' | 'country', value: string) => {
    navigate(`/recipes?${type}=${encodeURIComponent(value)}`)
  }

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>
  if (!recipe) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">

        <section className="flex-1">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full md:w-1/2 h-96 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{recipe.strMeal}</h1>
              <button
                onClick={() => { handleFilterClick('country', recipe.strArea); }}
                className="text-blue-600 hover:text-blue-800 text-lg cursor-pointer"
              >
                {recipe.strArea} Cuisine
              </button>
            </div>
          </div>

          <div className={styles.instructions}>
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            {recipe.strInstructions.map((step: string, index: number) => (
              <p key={index} className="mb-3">{step}</p>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recipe.ingredients.map(({ ingredient, measure }, index: number) => (
                <button
                  key={index}
                  onClick={() => { handleFilterClick('ingredient', ingredient); }}
                  className="bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors text-left"
                >
                  <span className="font-medium">{ingredient}</span>
                  <span className="text-gray-600 ml-2">{measure}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:w-80 max-h-[80vh] overflow-auto">
          <h3 className="text-xl font-bold mb-4">More {recipe.strCategory} Recipes</h3>
          <div className="space-y-4">
            {categoryRecipes.map((recipe: ISimpleRecipe) => (
              <Link
                key={recipe.idMeal}
                to={`/recipes/${recipe.idMeal}`}
                className="flex items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <span className="font-medium">{recipe.strMeal}</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default RecipeInfo