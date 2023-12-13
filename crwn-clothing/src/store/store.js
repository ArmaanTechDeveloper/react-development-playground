
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { createStore , compose , applyMiddleware} from 'redux'

const middleWares = [logger]

const composedEnhancers =  compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined , composedEnhancers)