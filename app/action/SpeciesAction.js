import { SpeciesTypes } from '../type'
import Data from '../data/Victoria endangered wildlife.json'

export const loadSpeciesList = () => {
    return async dispatch => {
        dispatch({
            type: SpeciesTypes.GET_SPECIES_LIST,
            payload: Data
        })
    }
}