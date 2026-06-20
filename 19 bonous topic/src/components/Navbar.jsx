import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <button 
        onClick={()=>{
            props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light')
        }}>
            Change theme
        </button>
    </div>
  )
}

export default Navbar