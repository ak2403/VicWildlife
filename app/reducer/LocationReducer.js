import { LocationTypes } from '../type'

let initialState = {
    nearby_location: [],
    bookmark_location: [],
    showLocationDetails: false,
    location_details: {},
    is_loaded: false
}

const LocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LocationTypes.GET_NEARBY_PLACES:
            return {
                ...state,
                nearby_location: action.payload.results,//.slice(0,6),
                is_loaded: true
            }

        case LocationTypes.BOOKMARK_LOCATION:
            return {
                ...state,
                bookmark_location: action.payload
            }

        case LocationTypes.GET_LOCATION_DETAILS:
            return {
                ...state,
                showLocationDetails: true,
                location_details: action.payload.result
            }

        case LocationTypes.CLOSE_LOCATION_DETAILS:
            return {
                ...state,
                showLocationDetails: false,
                location_details: {}
            }

        default:
            return state
    }
}

export default LocationReducer;