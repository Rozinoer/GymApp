import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {clientReducer} from './reducers/client'
import { authReducer } from './reducers/auth'

const rootReducer = combineReducers({
    client: clientReducer,
    auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))