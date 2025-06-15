import { useState } from 'react'
import './App.css'
import Count from './Count'
import Plus from './Plus'

function App() {
  const [count, setCount] = useState(0)

  function Minus(){
    setCount(p => p - 1)
  }

  return (
    <>
      <Count num={count}/>
      <Plus setCount={setCount}/>
      <button onClick={Minus} className='border-2 w-16 h-16'>-</button>
    </>
  )
}

export default App