import { useReducer } from "react";

type State = {count: number}

type Action = {type: "increment"} | {type: "decrement"};


const reducer = (state: State, action: Action) => {
    switch(action.type){
        case "increment":
            return {count: state.count + 1};
            break;
        case "decrement":
            return {count: state.count - 1};
            break;
        default:
            return state;
    };
};

const Counter = () => {
    const [state, dispatcher] = useReducer(reducer, {count: 0});

  return (
    <div>
        <p>{state.count}</p>
        <button onClick={() => dispatcher({type: "increment"})}>+</button>
        <button onClick={() => dispatcher({type: "decrement"})}>-</button>
    </div>
  );
};

export default Counter;