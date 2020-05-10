import {IntroductionTypes} from '../type'

let initialState = {
    is_onboarding_completed: false,
    is_app_loaded: false,
    userTheme: ''
}

const AuthenticationReducer = (state=initialState, action) => {
    switch(action.type){
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
                userTheme: action.theme
            }

        default:
            return state
    }
}

export default AuthenticationReducer;