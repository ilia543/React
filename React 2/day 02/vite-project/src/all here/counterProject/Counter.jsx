import React from 'react';
import "./style.css"



function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(pr => pr + 1);
    const decrement = () => setCount(pr => pr - 1);


  return (
    <>
      <div className='divC'>
        <p className='pC'>{count}</p>

        <div className='divbut'>
          <button onClick={increment} className='plus text-5xl'>+</button>
          <button onClick={decrement} className='minus text-5xl'>-</button>
        </div>
      </div>
    </>
  );
};

export default Counter;