import React , {useState} from 'react'

const Counter = () => {
    const [count,setcount]=useState(0);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
        <button onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

export default Counter;