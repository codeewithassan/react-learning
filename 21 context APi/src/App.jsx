import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { ThemeDataContext } from './context/ThemeContext'

const App = () => {
  const [theme] = useContext(ThemeDataContext)
  return (
    <div className={`app ${theme === 'light' ? 'dark' : 'light'}` }>
      <Navbar />
      <Button />
    </div>
  )
}

export default App