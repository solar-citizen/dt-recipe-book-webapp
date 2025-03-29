import { Navigate, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/src/components/templates'
import { RecipeInfo, RecipeList } from '@/src/pages'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Navigate to='/recipes' replace />} />
        <Route path='/recipes' element={<RecipeList />} />
        <Route path='/recipes/:id' element={<RecipeInfo />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
