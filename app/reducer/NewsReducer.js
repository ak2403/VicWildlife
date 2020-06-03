import {NewsTypes} from '../type'

let initialState = {
    latest_news: [],
    is_loaded: false,
    error_occured: false
}

const NewsReducer = (state=initialState, action) => {
    switch(action.type){
        case NewsTypes.GET_NEWS:
            return {
                ...state,
                latest_news: action.payload,
                is_loaded: true
            }

        default:
            return state
    }
}

export default NewsReducer;