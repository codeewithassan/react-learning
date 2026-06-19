import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    console.log(index)
    setuserData(response.data)
  }
  useEffect(() => {
    getData()
  }, [index])
  let printUserData = <h3 className='text-xs font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map((e, idx) => {
      return <div key={idx}>
        <Card e={e} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white scrollbar-thumb-gray-600 scrollbar-thin py-4'>
      <div className='flex justify-center items-center '>
        <h1 className='text-3xl font-bold bg-[#222] w-fit px-6 py-3 rounded-xl shadow shadow-gray-400'>
          Gallary
        </h1>
      </div>
      <div className='flex flex-wrap gap-4 justify-center items-center py-4 h-[80%] overflow-y-scroll scrollbar-none'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button
          style={{opacity: index === 1 ? 0.5 : 1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setuserData([])
            }
          }}
          className='bg-amber-400 text-sm active:scale-95 cursor-pointer text-black rounded px-4 py-2 font-semibold'>
          Prev
        </button>
        <button className='bg-amber-400 text-md active:scale-95 cursor-pointer text-black rounded-full px-4 py-2 font-semibold'>{index}</button>
        <button
          onClick={() => {
            setIndex(index + 1)
            setuserData([])
          }}
          className='bg-amber-400 text-sm active:scale-95 cursor-pointer text-black rounded px-4 py-2 font-semibold'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App