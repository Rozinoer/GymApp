import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {clientReducer} from './reducers/client'
import { authReducer } from './reducers/auth'
import { drillPlanReducer } from './reducers/drillPlan'

const rootReducer = combineReducers({
    client: clientReducer,
    auth: authReducer,
    drillPlan: drillPlanReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))