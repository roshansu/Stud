import { configureStore } from "@reduxjs/toolkit";
import inputState from "../../Frontend/src/Slice";

const store = configureStore({
    reducer: {
        inputState,
    },
});
export default store;