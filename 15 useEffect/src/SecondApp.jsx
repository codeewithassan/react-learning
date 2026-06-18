import React, { useEffect, useState } from 'react'

const SecondApp = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    function aChange() {
        console.log('a changed...')
    }
    function bChange() {
        console.log('b changed...')
    }
    useEffect(function () {
        aChange()
    }, [a])
    useEffect(function () {
        bChange()
    }, [b])
    return (
        <div>
            <h1>A is {a}</h1>
            <h1>B is {b}</h1>
            <button onClick={() => {
                setA(a + 1)
            }}>
                Change A
            </button>
            <button onClick={() => {
                setB(b + 1)
            }}>
                Change B
            </button>
        </div>
    )
}

export default SecondApp