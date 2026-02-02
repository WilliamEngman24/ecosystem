import React from 'react'
import Navigation from '../components/navigation'
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