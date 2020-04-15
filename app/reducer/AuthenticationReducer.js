import {IntroductionTypes} from '../type'

let initialState = {
    is_onboarding_completed: false,
    is_app_loaded: false
}

const AuthenticationReducer = (state=initialState, action) => {
    switch(action.type){
        case IntroductionTypes.COMPLETED_ONBOARDING:
            return {
                ...state,
                is_onboarding_completed: true
            }

        case IntroductionTypes.APP_LOADED:
            return {
                ...state,
                is_app_loaded: true,
                is_onboarding_completed: action.payload
            }

        default:
            return state
    }
}

export default AuthenticationReducer;