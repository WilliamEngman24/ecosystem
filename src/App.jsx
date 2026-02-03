import './App.css'

import NotFound from './pages/notFound'
import About from './pages/about'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import AnimalProfile from './pages/AnimalProfile'
import Animals from './pages/Animals'

import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="animals" element={<Animals />}/>

        <Route path="animals/:id" element={<AnimalProfile />}/>
      </Route>

      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
