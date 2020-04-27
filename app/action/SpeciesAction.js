import { SpeciesTypes } from '../type'
import * as getAPI from '../api/getAPI'
import Data from '../data/data.json'

export const loadSpeciesList = () => {
    return async dispatch => {
        // let getResponse = await getAPI.getSpecies()
        
        // if(getResponse.status == 200){
            dispatch({
                type: SpeciesTypes.GET_SPECIES_LIST,
                payload: Data
            })
        // }
    }
}