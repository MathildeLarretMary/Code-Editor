import { createSlice } from "@reduxjs/toolkit";

import html from "../Assets/html.svg";
import css from "../Assets/css.svg";
import js from "../Assets/js.svg";

const initialState = [
    {
        id : 1,
        lang : "html",
        imgURL : html,
        buttonContent : "HTML",
        code : `<div>
        <h1>Free Online Code Editor</h1>
        <p>code directly on your browser for free</p>
</div>`
    },
    {
        id : 2,
        lang : "css",
        imgURL : css,
        buttonContent : "CSS",
        code : `body {
            font-family: Roboto, sans-serif;
            padding: 25px;
            color: #111;
            backgound-color: #f1f1f1;
}`
    },
    {
        id : 3,
        lang : "javascript",
        imgURL : js,
        buttonContent : "JavaScript",
        code : `console.log("Hello World !")
`
    },
]

export const codeSlice = createSlice({
    name: "code-slice",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            const { id, value } = action.payload;
            const codeObject = state.find(obj => obj.id === id);

            if (codeObject) {
                codeObject.code = value;
            }
        }
    }
});

// actions => dispatch actions on our store to change the state 
export const {updateCode} = codeSlice.actions
// reducer creator => take actions and modify the state
export default codeSlice.reducer