import { SpeciesTypes } from '../type'

let initialState = {
    speciesList: [],
    bookmarked_species: []
}

const SpeciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SpeciesTypes.GET_SPECIES_LIST:
            return {
                ...state,
                speciesList: action.payload
            }

        case SpeciesTypes.GET_BOOKMARK_SPECIES:
            return {
                ...state,
                bookmarked_species: action.payload
            }
            
        default:
            return state
    }
}

export default SpeciesReducer;