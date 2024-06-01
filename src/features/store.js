import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import crudReducer from "./crud/crudSlice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        crud : crudReducer,
    }
});

export default store;