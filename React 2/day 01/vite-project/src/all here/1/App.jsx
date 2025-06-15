import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useeffect');
    document.title = `increment ${value}`
  }   ); // if here I write [] it useEffect will runs once 

  return (
    <>
      <h2>{value}</h2>

      <button onClick={() => setValue(pr => pr + 1)}>click</button>
    </>
  )
};

export default App;
