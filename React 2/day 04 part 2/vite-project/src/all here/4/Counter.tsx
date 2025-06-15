import React from 'react'

const Counter = () => {
  const [counter, setCounter] = React.useState<number>(0);

  function plus(){
    setCounter(pr => pr + 1);
  };

  return (
    <>
      <h2>Count: {counter}</h2>
      <button onClick={plus}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
};

export default Counter;