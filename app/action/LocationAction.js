import AsyncStorage from '@react-native-community/async-storage';
import * as getAPI from '../api/getAPI'
import {LocationTypes} from '../type'

/** Function that will get the nearby location based on the coordinates */
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

/** Function that will bookmark the locations to the local storage. */
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

/** Function that will retrieve the local storage data for the bookmarked location. */
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

export const getLocationDetails = location => {
    return async dispatch => {
        let getLocationInfo = await getAPI.getLocationDetails(location.place_id)
        
        if(getLocationInfo.status === 200){
            dispatch({
                type: LocationTypes.GET_LOCATION_DETAILS,
                payload: getLocationInfo.data
            })
        }
    }
}

export const closeDetails = () => ({
    type: LocationTypes.CLOSE_LOCATION_DETAILS
})