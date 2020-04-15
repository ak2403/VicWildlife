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