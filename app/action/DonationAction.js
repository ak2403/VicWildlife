import AsyncStorage from '@react-native-community/async-storage';
import * as getAPI from '../api/getAPI'
import { DonationTypes } from '../type'

/** Function that will get the donations information for the user */
export const getDonation = () => {
    return async dispatch => {
        let getResponse = await getAPI.getDonations()
        if (getResponse.status == 200) {
            dispatch({
                type: DonationTypes.GET_DONATIONS,
                payload: getResponse.data
            })
        }
    }
}
