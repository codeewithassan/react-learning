import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
            <h2 className='text-2xl font-bold'>Advance<span className='text-green-400'>⇄Routing</span></h2>
            <div className='flex gap-10'>
                <Link className='text-lg font-medium hover:underline hover:scale-105 hover:text-green-400' to='/'>Home</Link>
                <Link className='text-lg font-medium hover:underline hover:scale-105 hover:text-green-400' to='/about'>About</Link>
                <Link className='text-lg font-medium hover:underline hover:scale-105 hover:text-green-400' to='/dynamic'>Dynamic route</Link>
                <Link className='text-lg font-medium hover:underline hover:scale-105 hover:text-green-400' to='/nested'>Nested routes</Link>
            </div>
        </div>
    )
}

export default Navbar