import React from 'react'
import Navbar from './Navbar'
import Section1Content from './Section1Content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Section1Content users={props.users}/>
    </div>
  )
}

export default Section1