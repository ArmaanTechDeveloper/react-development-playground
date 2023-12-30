import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

import logger from 'redux-logger'

const middlewares = [logger]

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => (middlewares)
})