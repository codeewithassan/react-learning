import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

// const App = () => {
//   const user = "Hassan";
//   const age = 20
//   return (
//     // <div className='card'>
//     //   <h1>Muhammad Hassan</h1>
//     //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quos.</p>
//     // </div>
//     <div className='card'>
//       <h1>Hello Guys I am {user}!</h1>
//       <h2>and I am {age} years old.</h2>
//     </div>
//   )
// }
const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Card />
    </div>
  )
}

export default App