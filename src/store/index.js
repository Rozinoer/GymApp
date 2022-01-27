import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {clientReducer} from './reducers/client'

const rootReducer = combineReducers({
    client: clientReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))