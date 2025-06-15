import { useState, useEffect, useRef } from 'react';
import './App.css';
import Dies from './Dies';
import { nanoid } from "nanoid";

function App() {
  const [randomNumbers, setRandomNumbers] = useState(() => randomnums());
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  const gameWon = (randomNumbers.every(d => d.isHeld) && randomNumbers.every(d => d.value === randomNumbers[0].value) || count >= 20);

  useEffect(() => {
    if(gameWon){
      buttonRef.current.focus();
    };
  }, [gameWon]);


  function randomnums() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }));
  };

  function rolldice(){
    if(!gameWon){
      setRandomNumbers(prev => prev.map(die => die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}));
    
      setCount(p => p + 1);
    }else{
      setRandomNumbers(randomnums())
      setCount(0)
    }
  };

  function hold(id){
    setRandomNumbers(prev => {
      return prev.map(d => {
        return d.id === id ? {...d, isHeld: !d.isHeld} : d;
      });
    });
  };

  const diceElements = randomNumbers.map(diceobj => (
    <Dies 
      value={diceobj.value} 
      key={diceobj.id} 
      isHeld={diceobj.isHeld} 
      hold={() => hold(diceobj.id)}
      id={diceobj.id}
    />
  ));

  return (
    <>
      <div className="divp">
        {diceElements}
      </div>


      <button ref={buttonRef} className='but' onClick={rolldice}>{gameWon ? "New Game" : "click to roll"}</button>
      <p>{count}</p>
    </>
  );
};

export default App;
