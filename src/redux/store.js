import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slice/event";
import deptReducer from "./slice/department";
import courseReducer from "./slice/course";
import facultyReducer from "./slice/faculty";
import eventstype from "./slice/eventstype";

export const store = configureStore({
    reducer : {
        event : eventReducer,
        department : deptReducer,
        course : courseReducer,
        faculty : facultyReducer,
        eventstype:eventstype,
    }
});