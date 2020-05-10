import AsyncStorage from '@react-native-community/async-storage';

/** Importing the types */
import { IntroductionTypes } from '../type'

/** Function that will run when the user completes the onboarding of the app. */
export const completedOnboarding = (theme) => {
    return async dispatch => {
        try {
            let getResponse = await AsyncStorage.setItem('@isOnboardingComplete', 'true')
            let setTheme = await AsyncStorage.setItem('@userSelectedTheme', theme)
            dispatch({
                type: IntroductionTypes.COMPLETED_ONBOARDING,
                payload: theme
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
                let getTheme = await AsyncStorage.getItem('@userSelectedTheme')
                dispatch({
                    type: IntroductionTypes.APP_LOADED,
                    payload: getResponse == 'true' ? true : false,
                    theme: getTheme
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