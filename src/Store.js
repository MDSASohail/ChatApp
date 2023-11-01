import counterReducer from './Reducer'
import { configureStore } from "@reduxjs/toolkit";
import namess from './Reducer2'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        name:namess
    }
})