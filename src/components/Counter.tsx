import  { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState<number>(0)

    const handleIncCount = () => {
        setCount(count+1)
    }
    const handleDecCount = () => {
        setCount(count-1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncCount}>Increase</button>
        <button onClick={handleDecCount}>Decrease</button>
    </div>
  )
}

export default Counter