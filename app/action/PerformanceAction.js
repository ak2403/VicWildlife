import * as getAPI from '../api/getAPI'
import {PerformanceTypes} from '../type'

export const getQuizQuestions = props => {
    return async dispatch => {
        let getResponse = await getAPI.getQuizQuestions(props)
        
        if(getResponse.status == 200){
            dispatch({
                type: PerformanceTypes.GET_QUIZ_QUESTIONS,
                payload: getResponse.data
            })
        }
    }
}

export const resetQuiz = () => ({
    type: PerformanceTypes.RESET_QUIZ_OPTIONS
})