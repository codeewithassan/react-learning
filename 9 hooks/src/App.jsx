import React from 'react'

const App = () => {
  const btnClick = () =>{
    console.log('Btn clicked')
  }
  return (
    <div>
      <button onClick={btnClick}>Click Me!</button>
    </div>
  )
}

export default App