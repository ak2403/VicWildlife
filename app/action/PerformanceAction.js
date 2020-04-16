import AsyncStorage from '@react-native-community/async-storage';
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

export const saveQuiz = quizArr => {
    return async dispatch => {
        let getQuizData = await AsyncStorage.getItem("@quiz_statistics3")
        let parsedQuizData = []

        if(getQuizData != null){
            parsedQuizData = JSON.parse(getQuizData)
        }

        let joinedArray = quizArr.concat(parsedQuizData)
        let saveQuizData = await AsyncStorage.setItem("@quiz_statistics3", JSON.stringify(joinedArray))

        dispatch({
            type: PerformanceTypes.SAVE_QUIZ_STATISTICS,
            payload: joinedArray
        })
    }
}

export const getQuizStatistics = () => {
    return async dispatch => {
        let getQuizData = await AsyncStorage.getItem("@quiz_statistics3")
        let parsedQuizData = []

        if(getQuizData != null){
            parsedQuizData = JSON.parse(getQuizData)
        }

        dispatch({
            type: PerformanceTypes.SAVE_QUIZ_STATISTICS,
            payload: parsedQuizData
        })
    }
}

export const resetQuiz = () => ({
    type: PerformanceTypes.RESET_QUIZ_OPTIONS
})