import { IntroductionTypes } from '../type'

let initialState = {
    is_onboarding_completed: false,
    is_app_loaded: false,
    userTheme: '',
    showMenu: false,
    darkTheme: false,
    isNetworkLive: true,
    offlineMode: false
}

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case IntroductionTypes.COMPLETED_ONBOARDING:
            return {
                ...state,
                is_onboarding_completed: true,
                userTheme: action.payload
            }

        case IntroductionTypes.APP_LOADED:
            return {
                ...state,
                is_app_loaded: true,
                is_onboarding_completed: action.payload,
                userTheme: action.theme,
                darkTheme: action.darkTheme,
                offlineMode: action.offlineMode
            }

        case IntroductionTypes.SHOW_MENU:
            return {
                ...state,
                showMenu: action.payload
            }

        case IntroductionTypes.CHANGE_APP_THEME:
            return {
                ...state,
                userTheme: action.payload
            }

        case IntroductionTypes.TOGGLE_DARK_THEME:
            return {
                ...state,
                darkTheme: action.payload
            }

        case IntroductionTypes.TOGGLE_OFFLINE_MODE:
            return {
                ...state,
                offlineMode: action.payload
            }

        case IntroductionTypes.CHECK_NETWORK:
            return {
                ...state,
                isNetworkLive: action.payload
            }

        default:
            return state
    }
}

export default AuthenticationReducer;