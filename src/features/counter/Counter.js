import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// secelector is used to get the specfic state from the store
import { increment,decrement,reset,incrementByAmount} from './counterSlice'
const Counter = () => {

const count = useSelector((state)=>state.counter.count)
//couter => counterslice is the counter which has a name counter that we have set the name 
//count  => it is the initial state variabel name in the counter

const dispatch = useDispatch()
// it is user to use the functions in the counterSlice
const [incrementAmount , setIncrementAmount] = useState(0)

const addValue = Number(incrementAmount) || 0 ;
// if the input is number it will be stored or else 0 will be returned

const resetall = () =>{
  setIncrementAmount(0)
  dispatch(reset())  // reset the increment
}




  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
        <input type='Number' placeholder='Enter the vlaue'
         value={incrementAmount} 
        onChange={(e)=> setIncrementAmount(e.target.value)} />

        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))} >Add Amount</button>
          <button onClick={resetall}>Reset</button>
        </div>


    </section>
  )
}

export default Counter