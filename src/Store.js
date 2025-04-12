import { configureStore } from "@reduxjs/toolkit";
import inputState from "./Slice";

const store = configureStore({
    reducer: {
        inputState,
    },
});
export default store;
