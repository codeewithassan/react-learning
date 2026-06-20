import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nested = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/Nested/men' >Men</Link>
        <Link className='text-xl font-semibold' to='/Nested/women' >Women</Link>
        <Link className='text-xl font-semibold' to='/Nested/kids' >Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Nested