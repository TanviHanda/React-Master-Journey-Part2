import { useReducer } from "react";
import { counterReducer, type CounterState } from "../counterReducer";

const initialState: CounterState = { count: 0 }; 

const Counter3 = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
        <h2>Counter 4</h2>
      <p>count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter3;
