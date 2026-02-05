import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navigation />
    <main>
      <Outlet />
    </main>

    </>
  )
}

export default MainLayout