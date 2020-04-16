import {PerformanceTypes} from '../type'

let initialState = {
    quiz_statistics: [],
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

        case PerformanceTypes.SAVE_QUIZ_STATISTICS:
            return {
                ...state,
                quiz_statistics: action.payload
            }
        
        case PerformanceTypes.RESET_QUIZ_OPTIONS:
            return {
                ...state,
                // list_of_quiz_questions: [],
                isQuizStarted: false
            }

        default:
            return state
    }
}

export default PerformanceReducer;