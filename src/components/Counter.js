import React from 'react'
import { increment, decreament, reset } from '../feature/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count= useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  const arr1=[1,2,3,4,5,6];
  const data=arr1.push(90)
  console.log("Try programiz.pro",data);
  return (
    <div>
      <h4>counter value</h4>
      {count}

      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decreament())}>decreament</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
