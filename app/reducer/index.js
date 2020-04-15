import {combineReducers} from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import LocationReducer from './LocationReducer'
import PerformanceReducer from './PerformanceReducer'

export default combineReducers({
    authentication: AuthenticationReducer,
    location: LocationReducer,
    performance: PerformanceReducer
})