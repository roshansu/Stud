import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
// import inputState from "../../Fr/Slice";
import inputState from "./Slice"
=======
import inputState from "./Slice";
>>>>>>> 099b7966884a70162b71a085b949ee992563f881

const store = configureStore({
    reducer: {
        inputState,
    },
});
export default store;
