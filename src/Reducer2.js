import { createSlice } from "@reduxjs/toolkit"

const initialState={
    allname:[]
}

const nameAdd=createSlice({
    name:"names",
    initialState,
    reducers:{
        append:(state,action)=>{
            state.allname.push(action.payload);
        },
        addB:(state,action)=>{
            state.allname.unshift(action.payload);
        },
        removeB:(state)=>{
            state.allname.shift();
        },
        remove:(state)=>{
            state.allname.pop();
        }
    }
})


export const {append,addB,remove,removeB}=nameAdd.actions;
export default nameAdd.reducer;