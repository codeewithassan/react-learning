import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()
  return (
    <div className='flex py-2 px-4 bg-cyan-800 gap-4'>
      <button
        onClick={()=>{
          navigate('/')
        }}
        className='px-4 py-2 bg-amber-600 rounded font-semibold text-xs cursor-pointer active:scale-95 duration-150'>
        Return to Home Page
      </button>
      <button
        onClick={()=>{
          navigate(-1)
        }}
        className='px-4 py-2 bg-amber-600 rounded font-semibold text-xs cursor-pointer active:scale-95 duration-150'>
        Back
      </button>
      <button
        onClick={()=>{
          navigate(+1)
        }}
        className='px-4 py-2 bg-amber-600 rounded font-semibold text-xs cursor-pointer active:scale-95 duration-150'>
        Next
      </button>
    </div>
  )
}

export default Navbar2