import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {clientReducer} from './reducers/client'
import { authReducer } from './reducers/auth'
import { drillPlanReducer } from './reducers/drillPlan'
import { chatsReducer } from './reducers/chats'
import { testReducer } from './reducers/test'

const rootReducer = combineReducers({
    client: clientReducer,
    auth: authReducer,
    drillPlan: drillPlanReducer,
    chats: chatsReducer,
    test: testReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))