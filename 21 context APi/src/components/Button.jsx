import React, { useState } from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme, setTheme] =useContext(ThemeDataContext)
    const [btnTheme, setBtnTheme] = useState('btnlight')
  return (
    <div>
        <button
        className={`btn ${btnTheme}`} 
        onClick={()=>{
            theme === 'dark' ? setTheme('light') : setTheme('dark')
            btnTheme === 'btndark' ? setBtnTheme('btnlight') : setBtnTheme('btndark')
        }}>
            Change theme {theme === 'light' ? 'dark' : 'light'}
        </button>
    </div>
  )
}

export default Button