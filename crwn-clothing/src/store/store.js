
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { createStore , compose , applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const middleWares = [logger , thunk]

const composedEnhancers =  compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined , composedEnhancers)

export const persistor = persistStore(store)