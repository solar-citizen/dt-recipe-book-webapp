import { Navigate, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/src/components/templates'
import { AppRoutes } from '@/src/lib'
import { RecipeInfo, RecipeList } from '@/src/pages'

const { recipes } = AppRoutes

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Navigate to={recipes.route} replace />} />
        <Route path={recipes.route} element={<RecipeList />} />
        <Route path={`${recipes.route}/:id`} element={<RecipeInfo />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
