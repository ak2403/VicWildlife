import AsyncStorage from '@react-native-community/async-storage';
import { IntroductionTypes } from '../type'

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