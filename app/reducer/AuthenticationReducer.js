import {IntroductionTypes} from '../type'

let initialState = {
    is_onboarding_completed: false
}

const AuthenticationReducer = (state=initialState, action) => {
    switch(action.type){
        case IntroductionTypes.COMPLETED_ONBOARDING:
            return {
                ...state,
                is_onboarding_completed: true
            }

        default:
            return state
    }
}

export default AuthenticationReducer;