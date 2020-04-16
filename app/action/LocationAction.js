import AsyncStorage from '@react-native-community/async-storage';
import * as getAPI from '../api/getAPI'
import {LocationTypes} from '../type'

export const getNearbyLocations = props => {
    return async dispatch => {
        let getResponse = await getAPI.getNearbyPlaces(props)
        if(getResponse.status == 200){
            dispatch({
                type: LocationTypes.GET_NEARBY_PLACES,
                payload: getResponse.data
            })
        }
    }
}

export const bookmarkLocation = data => {
    return async dispatch => {
        let getBookmarkLocation = await AsyncStorage.getItem("@bookmarkLocation1")
        let parsedLocationData = []

        if(getBookmarkLocation != null){
            parsedLocationData = JSON.parse(getBookmarkLocation)
        }

        let joinedArray = parsedLocationData.concat(data)
        let saveLocationData = await AsyncStorage.setItem("@bookmarkLocation1", JSON.stringify(joinedArray))

        dispatch({
            type: LocationTypes.BOOKMARK_LOCATION,
            payload: joinedArray
        })
    }
}

export const getBookmarkLocation = () => {
    return async dispatch => {
        let getBookmarkLocation = await AsyncStorage.getItem("@bookmarkLocation1")
        let parsedLocationData = []

        if(getBookmarkLocation != null){
            parsedLocationData = JSON.parse(getBookmarkLocation)
        }

        dispatch({
            type: LocationTypes.BOOKMARK_LOCATION,
            payload: parsedLocationData
        })
    }   
}