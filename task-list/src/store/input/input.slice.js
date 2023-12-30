import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    currentText: '',
    mode: 'new',
    editId: undefined
}

const inputSlice = createSlice({
    name: 'input',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentText(state , action){
            state.currentText = action.payload
        },
        setMode(state , action){
            state.mode = action.payload
        },
        setEditId(state , action){
            state.editId = action.payload
        }
    }
})

export const { setCurrentText , setMode , setEditId } = inputSlice.actions
export const inputReducer = inputSlice.reducer