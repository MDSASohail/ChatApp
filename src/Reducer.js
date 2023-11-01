import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:0
}

export const create=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increase:(state)=>{
            state.value+=1;
        },
        decrease:(state)=>{
            state.value-=1;
        },
        product:(state,action)=>{
            state.value*=action.payload
        },
    },
})


export const {increase,decrease,product}=create.actions;
export default create.reducer;