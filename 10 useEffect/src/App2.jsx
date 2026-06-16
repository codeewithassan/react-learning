import React, { useState } from 'react'

const App2 = () => {
    const [num, setNum] = useState({user:"Hassan", age:20})
    // const [num, setNum] = useState([10,20,30])
    // const [num, setNum] = useState(0)

    const btnClicked = () => {
        // const newNum = {...num}
        // newNum.user = 'Zain'
        // setNum(newNum);

        // const newNum = [...num]
        // console.log(newNum)
        // newNum.push(99)
        // setNum(newNum)

        setNum(prev => ({ ...prev, age: 22 }))

        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1) it cannot update the num by 3

        // setNum(prev => prev+1)
        // setNum(prev => prev+1)
        // setNum(prev => prev+1) // it can update the num by 3 (Batch update)
    }
    return (
        <div>
            <h1>{num.user} {num.age}</h1>
            {/* <h1>{num}</h1> */}
            <button onClick={btnClicked}>Click</button>
        </div>
    )
}

export default App2