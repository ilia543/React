import { useState } from 'react'
import './App.css'
import Body from './body'
import Header from './header'

function App() {
  const [userName, setUserName] = useState(["ilia ", "jamal"])
  const [age, setage] = useState(16)

  return (
    <>
      <Header UserName={userName}/>
      <Body UserName={userName} age={age}/>
    </>
  )
}

export default App