import { useReducer } from 'react';
import './App.css';

const intialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1};
      break;
    case "decrement":
      return {...state, count: state.count - 1};
      break;
    case "division":
      return {...state, count: Math.floor(state.count / 2)};
      break;
    case "multiplication":
      return{...state, count: state.count * 2};
      break;
    case "reset":
      return {...state, count: 0};
      break;

    default:
      return state;
  };
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  
  return (
    <>
      <h1>count: {state.count}</h1>

      <button className='border-2 w-10 h-6' onClick={() => dispatch({type: "increment"})}>+</button>
      <button className='border-2 w-10 h-6' onClick={() => dispatch({type: "decrement"})}>-</button>
      <button className='border-2 w-10 h-6' onClick={() => dispatch({type: "division"})}>/2</button>
      <button className='border-2 w-10 h-6' onClick={() => dispatch({type: "multiplication"})}>*2</button>
      <button className='border-2 w-10 h-6' onClick={() => dispatch({type: "reset"})}>reset</button>
    </>
  );
};

export default App;
