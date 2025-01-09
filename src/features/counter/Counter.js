import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
// secelector is used to get the specfic state from the store
import { increment,decrement } from './counterSlice'
const Counter = () => {

const count = useSelector((state)=>state.counter.count)
//couter => counterslice is the counter which has a name counter that we have set the name 
//count  => it is the initial state variabel name in the counter

const dispatch = useDispatch()
// it is user to use the functions in the counterSlice






  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    </section>
  )
}

export default Counter