import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    status: 'all'
}

export const statusSlice = createSlice({
    name: 'status',
    initialState: INITIAL_STATE,
    reducers: {
        setStatus(state , action) {
            state.status = action.payload
        }
    }
})

export const { setStatus } = statusSlice.actions
export const statusReducer = statusSlice.reducer