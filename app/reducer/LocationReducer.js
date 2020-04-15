import {LocationTypes} from '../type'

let initialState = {
    nearby_location: []
}

const LocationReducer = (state=initialState, action) => {
    switch(action.type){
        case LocationTypes.GET_NEARBY_PLACES:
            return {
                ...state,
                nearby_location: action.payload.results.slice(0,6)
            }
        default:
            return state
    }
}

export default LocationReducer;