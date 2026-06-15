import React from 'react'

const App = () => {
  // let count = 0;
  // function btnClicked() {
  //   console.log('Button Clicked!', count += 1)
  // }
  function onChangeFun(val){
    console.log(val)
  }
  return (
    // <div>
    //   <button onClick={btnClicked}>Click Me</button>
    //   <button onClick={()=>{
    //     console.log("Button clicked!")
    //   }}>Click Me</button>
    // </div>
    <div>
      <input type="text" placeholder='Enter name' onChange={function(e){
        onChangeFun(e.target.value)
      }} />
    </div>
  )
}

export default App