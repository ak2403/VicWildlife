import {PerformanceTypes} from '../type'

let initialState = {
    list_of_quiz_questions: [],
    isQuizStarted: false
}

const PerformanceReducer = (state=initialState, action) => {
    switch(action.type){
        case PerformanceTypes.GET_QUIZ_QUESTIONS:
            return {
                ...state,
                list_of_quiz_questions: action.payload.results,
                isQuizStarted: true
            }
        
        case PerformanceTypes.RESET_QUIZ_OPTIONS:
            return {
                ...state,
                list_of_quiz_questions: [],
                isQuizStarted: false
            }

        default:
            return state
    }
}

export default PerformanceReducer;