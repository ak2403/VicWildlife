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

export const bookmarkLocation = (data, index) => {
    return async dispatch => {
        let getBookmarkLocation = await AsyncStorage.getItem("@bookmarkLocation1")
        let parsedLocationData = []
        let joinedArray = []

        if(getBookmarkLocation != null){
            parsedLocationData = JSON.parse(getBookmarkLocation)
            if(index != -1){
                parsedLocationData.splice(index, 1)
                joinedArray = parsedLocationData
            }else{
                joinedArray = parsedLocationData.concat(data)
            }
        }
        
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