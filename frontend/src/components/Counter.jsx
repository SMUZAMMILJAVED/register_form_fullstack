import React, { useState } from 'react'

const Counter = () => {
     const [val,setVal]=useState(0)
 
let a=0;
const handleClick=()=>{
setVal(val+1)}
  return (
    <div>
      <h1>Counter is {val}</h1>
  <button onClick={handleClick}>increment</button>
  <button onClick={()=>{
    setVal(val-1)
  }}>decrement</button>
    </div>
  )
}

export default Counter
