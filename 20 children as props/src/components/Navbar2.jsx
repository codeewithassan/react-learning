import React from 'react'

const Navbar2 = (props) => {
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h3>{props.theme} mode</h3>
    </div>
  )
}

export default Navbar2