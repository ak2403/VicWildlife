import { SpeciesTypes } from '../type'
import * as getAPI from '../api/getAPI'
import Data from '../data/data.json'
import AsyncStorage from '@react-native-community/async-storage';

export const loadSpeciesList = () => {
    return async dispatch => {
        // let getResponse = await getAPI.getSpecies()

        // if(getResponse.status == 200){
        let getSpecies = await AsyncStorage.getItem('@bookmarkSpecies')
        let bookmarkSpecies = []
        if (getSpecies) {
            bookmarkSpecies = JSON.parse(getSpecies)
        }
        dispatch({
            type: SpeciesTypes.GET_SPECIES_LIST,
            payload: Data,
            bookmarkSpecies: bookmarkSpecies
        })
        // }
    }
}

export const bookmarkSpecies = (species, isPresent, bookmark_index) => {
    return async dispatch => {
        let getSpecies = await AsyncStorage.getItem('@bookmarkSpecies')
        let bookmark_species = []

        if (getSpecies) {
            bookmark_species = JSON.parse(getSpecies)
            if(isPresent){
                bookmark_species.splice(bookmark_index, 1)
            }else{
                bookmark_species.push(species)
            }
        } else {
            bookmark_species = [species]
        }
        
        let saveSpecies = await AsyncStorage.setItem('@bookmarkSpecies', JSON.stringify(bookmark_species))

        dispatch({
            type: SpeciesTypes.GET_BOOKMARK_SPECIES,
            payload: bookmark_species
        })
    }
}

export const getBookmarkSpecies = () => {
    return async dispatch => {
        let getSpecies = await AsyncStorage.getItem('@bookmarkSpecies')
        let bookmark_species = []

        if (getSpecies) {
            bookmark_species = JSON.parse(getSpecies)
        }

        dispatch({
            type: SpeciesTypes.GET_BOOKMARK_SPECIES,
            payload: bookmark_species
        })
    }
}