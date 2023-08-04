import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slice/event";

export const store = configureStore({
    reducer : {
        event : eventReducer,
    }
});