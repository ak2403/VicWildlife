import {LocationTypes} from '../type'

let initialState = {
    nearby_location: [],
    bookmark_location: []
}

const LocationReducer = (state=initialState, action) => {
    switch(action.type){
        case LocationTypes.GET_NEARBY_PLACES:
            return {
                ...state,
                nearby_location: action.payload.results.slice(0,6)
            }

        case LocationTypes.BOOKMARK_LOCATION:
            return {
                ...state,
                bookmark_location: action.payload
            }

        default:
            return state
    }
}

export default LocationReducer;