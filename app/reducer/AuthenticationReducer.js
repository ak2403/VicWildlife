import { IntroductionTypes } from '../type'

let initialState = {
    is_onboarding_completed: false,
    is_app_loaded: false,
    userTheme: '',
    showMenu: false,
    darkTheme: false
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
                darkTheme: action.darkTheme
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

        default:
            return state
    }
}

export default AuthenticationReducer;