import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = ({children, theme}) => {
    console.log(children)
  return (
    <div className='nav'>
        <h2>Children as Props</h2>
        {children[0]}
        {children[1]}
        <Navbar2 theme={theme} />
    </div>
  )
}

export default Navbar