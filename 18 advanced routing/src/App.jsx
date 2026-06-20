import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nested from './pages/Nested'
import DynamicRoute from './pages/DynamicRoute'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import DynamicRouteDetails from './pages/DynamicRouteDetails'
import Navbar2 from './Components/Navbar2'

const App = () => {
  return (
    <div className='h-screen text-white bg-black'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='dynamic' element={<DynamicRoute />} />
        <Route path='dynamic/:dynamicId' element={<DynamicRouteDetails/>}/>
        <Route path='Nested' element={<Nested />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App