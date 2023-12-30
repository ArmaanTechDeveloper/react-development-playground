import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const middlewares = [logger]

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => (middlewares)
})

export const persistor = persistStore(store)