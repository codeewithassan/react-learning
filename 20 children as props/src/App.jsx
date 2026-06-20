import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className='app' className={`app ${theme}`}>
      <Navbar theme={theme} >
        <h2>This is Navbar</h2>
        <h3>This is also Navbar</h3>
      </Navbar>
      <button
      onClick={()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
      }} 
      className='btn'>
        Change theme
      </button>
    </div>
  )
}

export default App