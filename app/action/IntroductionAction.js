import AsyncStorage from '@react-native-community/async-storage';

/** Importing the types */
import { IntroductionTypes } from '../type'

/** Function that will run when the user completes the onboarding of the app. */
export const completedOnboarding = () => {
    return async dispatch => {
        try {
            let getResponse = await AsyncStorage.setItem('@isOnboardingComplete', 'true')
            dispatch({
                type: IntroductionTypes.COMPLETED_ONBOARDING
            })
        } catch (e) {
            // saving error
        }
    }
}

/** Function that will run when the app starts initially */
export const loadingAppStatus = () => {
    return async dispatch => {
        try {
            let getResponse = await AsyncStorage.getItem('@isOnboardingComplete')
            if(getResponse != null){
                dispatch({
                    type: IntroductionTypes.APP_LOADED,
                    payload: getResponse == 'true' ? true : false
                })
            }else{
                dispatch({
                    type: IntroductionTypes.APP_LOADED,
                    payload: false
                })
            }
            
        } catch (e) {
            // saving error
        }
    }
}