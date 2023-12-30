import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    tasksArray: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: INITIAL_STATE,
    reducers: {
        setTasksArray(state , action){
            state.tasksArray = action.payload
        }
    }
})


export const { setTasksArray } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer