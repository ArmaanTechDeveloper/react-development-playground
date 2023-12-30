import { combineReducers } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/tasks.slice";
import { statusReducer } from "./status/status.slice"

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    status: statusReducer
})