import { Outlet } from 'react-router-dom'

import { Header } from '@/src/components/molecules'

const MainLayout = () => (
  <>
    <Header />

    <main>
      <Outlet />
    </main>
  </>
)

export default MainLayout
