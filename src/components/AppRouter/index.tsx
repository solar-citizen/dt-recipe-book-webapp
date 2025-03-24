import { Navigate, Route, Routes } from 'react-router-dom'

import { RecipeInfo, RecipeList } from '@/src/pages'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipes/:id" element={<RecipeInfo />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter