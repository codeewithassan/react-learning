import axios from 'axios'
import React from 'react'

const App = () => {
  // const getData = async() =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   let data = await response.json()
  //   console.log(data)
  // }
  const getData = async() =>{
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    // console.log(response.data)

    const {data} = await axios.get('https://picsum.photos/v2/list'); // Destructuring
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}>Get Todos</button>
    </div>
  )
}

export default App