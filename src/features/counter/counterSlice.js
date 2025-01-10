import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
    // since we are going to create a counter app we setting the initial state as 0
}

export const counterSlice = createSlice({
    name:"counter", // name for the slice
    initialState,
    reducers:{
        increment:(state) =>{ // if increment happened 
            state.count +=1  // count is thte name of the variable
        },
        decrement:(state) =>{ // if decrement happened
            state.count -=1
        },
        reset:(state) =>{ // if reset happened
            state.count = 0
        },
        incrementByAmount:(state,action) =>{ // action is the user given value 
            state.count += action.payload 
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions // exporting the actions inside the counterslice

export default counterSlice.reducer  // export the reducer inside the counterslice

//! import it in the store