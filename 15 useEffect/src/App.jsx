import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100)
  useEffect(function () {
    console.log('useEffect is running...')
  }, [num])
  return (
    <div>
      <h1>Num {num}</h1>
      <h1>Num2 {num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1)
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10)
        }}
      >
        Hover
      </button>
    </div>
  )
}

export default App