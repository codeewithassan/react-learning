import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  const increaseNum =()=> {
    setNum(num + 1)
  }
  const decreaseNum =()=> {
    setNum(num - 1)
  }
  const increaseBy5 =()=>{
    setNum(num + 5)
  }
  return (
    <div>
      <h1 className='h1-1'>{num}</h1>
      <button className='btn1' onClick={increaseNum}>increase</button>
      <button className='btn1' onClick={decreaseNum}>decrease</button>
      <button className='btn1' onClick={increaseBy5}>Increace by 5</button>
    </div>
  )
}

export default App