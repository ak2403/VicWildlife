import {combineReducers} from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import LocationReducer from './LocationReducer'
import PerformanceReducer from './PerformanceReducer'
import SpeciesReducer from './SpeciesReducer'
import NewsReducer from './NewsReducer'
import DonationReducer from './DonationReducer'

export default combineReducers({
    authentication: AuthenticationReducer,
    location: LocationReducer,
    performance: PerformanceReducer,
    species: SpeciesReducer,
    news: NewsReducer,
    donation: DonationReducer
})