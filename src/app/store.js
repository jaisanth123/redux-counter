import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';


// out store
export const store = configureStore({
    reducer:{
        counter : counterReducer, 
        // define your reducers here
    }
})