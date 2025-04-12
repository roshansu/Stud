import { createSlice } from "@reduxjs/toolkit";

const inputState = createSlice({
    name: "inputState",
    initialState: {
        course: "All",
        year: 0,
        filter: 0,
    },
    reducers: {
       setCourse:(state, action)=>{
            state.course = action.payload
       },
        setYear:(state, action)=>{
                state.year = action.payload
         },
        setFilter:(state, action)=>{
            state.filter = action.payload
        },
    },
});
export const { setCourse, setYear, setFilter } = inputState.actions;
export default inputState.reducer;