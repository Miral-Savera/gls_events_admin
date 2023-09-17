import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slice/event";
import deptReducer from "./slice/department";

export const store = configureStore({
    reducer : {
        event : eventReducer,
        department : deptReducer,
    }
});