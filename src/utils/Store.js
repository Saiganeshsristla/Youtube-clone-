import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
    reducer:{
        app: AppSlice,
        search: searchSlice,
        chat: chatSlice,
    }
});


export default Store;