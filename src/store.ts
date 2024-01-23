import { configureStore } from "@reduxjs/toolkit";
import redux from "./Features/redux"; // export default codeSlice.reducer

export const store = configureStore({
    reducer: {
        redux // reducer created and gived to the store ---> modify the state
    }
})