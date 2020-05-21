import AsyncStorage from '@react-native-community/async-storage';

/** Importing the types */
import { IntroductionTypes } from '../type'

/** Function that will run when the user completes the onboarding of the app. */
export const completedOnboarding = (theme) => {
    return async dispatch => {
        try {
            let getResponse = await AsyncStorage.setItem('@isOnboardingComplete', 'true')
            let setTheme = await AsyncStorage.setItem('@userSelectedTheme', theme)
            let setDarkTheme = await AsyncStorage.setItem('@darkTheme', "false")
            let setMode = await AsyncStorage.setItem('@offlineMode', "false")
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
                let getDarkTheme = await AsyncStorage.getItem('@darkTheme')
                let getOfflineMode = await AsyncStorage.getItem('@offlineMode')
                
                dispatch({
                    type: IntroductionTypes.APP_LOADED,
                    payload: getResponse == 'true' ? true : false,
                    theme: getTheme,
                    darkTheme: getDarkTheme == 'true' ? true : false,
                    offlineMode: getOfflineMode == 'true' ? true : false
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

export const switchAppTheme = theme => {
    return async dispatch => {
        let setTheme = await AsyncStorage.setItem('@userSelectedTheme', theme)
        dispatch({
            type: IntroductionTypes.CHANGE_APP_THEME,
            payload: theme
        })
    }
}

export const showMainMenu = value => ({
    type: IntroductionTypes.SHOW_MENU,
    payload: value
})

export const toggleDarkTheme = theme => {
    return async dispatch => {
        let setTheme = await AsyncStorage.setItem('@darkTheme', theme.toString())
        dispatch({
            type: IntroductionTypes.TOGGLE_DARK_THEME,
            payload: theme
        })
    }
}

export const toggleOfflineMode = mode => {
    return async dispatch => {
        let setMode = await AsyncStorage.setItem('@offlineMode', mode.toString())
        dispatch({
            type: IntroductionTypes.TOGGLE_OFFLINE_MODE,
            payload: mode
        })
    }
}

export const checkNetwork = value => ({
    type: IntroductionTypes.CHECK_NETWORK,
    payload: value
})