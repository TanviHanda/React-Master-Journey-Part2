import { useReducer } from "react"
type State = {count:number}
type Action = {type:'INCREMENT' |'DECREMENT'}
const reducer = (state:State,action:Action): State => {
    switch(action.type){
        case 'INCREMENT':
              return {count:state.count+1}
        case 'DECREMENT':
              return {count:state.count-1}
        default:
            return state
    }
}
const Counter2 = () => {
  const[state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
        <h2>Counter 3</h2>
<p>Count: {state.count}</p>
<button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
<button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
    </div>
  )
}

export default Counter2