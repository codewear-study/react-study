import React, { useReducer } from "react";

function calculate(state,action){
    // action.type에 따라서 수행
    switch(action.type){
        case 'divide':
            return(result: left / right);
        case 'multiple':
            return(result: left * right);
        case 'minus' :
            return(result: left - right);
        case 'add ':
            return(result: left + right);
        default:
            return state;
    }
}

const Counter = () => {
  const [state, dispatch] = useReducer(calculate,{result:0});
  
  return (
    <div>
      <input value={left}></input>
      <input value={right}></input>
      <b>{state.result}</b>
      <button onClick={()=>dispatch({type:'divide'})}>/</button>
      <button onClick={()=>dispatch({type:'multiple'})}>*</button>
      <button onClick={()=>dispatch({type:'minus'})}>-</button>
      <button onClick={()=>dispatch({type:'add'})}>+</button>
    </div>
  );
};

export default Counter;
