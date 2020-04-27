import {PerformanceTypes} from '../type'

let initialState = {
    quiz_statistics: [],
    list_of_quiz_questions: [],
    // list_of_quiz_questions: [{"category":"Animals","type":"multiple","difficulty":"easy","question":"Hippocampus is the Latin name for which marine creature?","correct_answer":"Seahorse","incorrect_answers":["Dolphin","Whale","Octopus"]},{"category":"Animals","type":"multiple","difficulty":"easy","question":"Which class of animals are newts members of?","correct_answer":"Amphibian","incorrect_answers":["Fish","Reptiles","Mammals"]},{"category":"Animals","type":"multiple","difficulty":"easy","question":"What is the collective noun for a group of crows?","correct_answer":"Murder","incorrect_answers":["Pack","Gaggle","Herd"]},{"category":"Animals","type":"multiple","difficulty":"easy","question":"How many teeth does an adult rabbit have?","correct_answer":"28","incorrect_answers":["30","26","24"]},{"category":"Animals","type":"multiple","difficulty":"easy","question":"What is the name of a rabbit&#039;s abode?","correct_answer":"Burrow","incorrect_answers":["Nest","Den","Dray"]}],
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