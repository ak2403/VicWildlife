import { SpeciesTypes } from '../type'

let initialState = {
    speciesList: []
}

const SpeciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SpeciesTypes.GET_SPECIES_LIST:
            return {
                ...state,
                speciesList: action.payload
            }
            
        default:
            return state
    }
}

export default SpeciesReducer;