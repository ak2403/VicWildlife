import {NewsTypes} from '../type'

let initialState = {
    latest_news: []
}

const NewsReducer = (state=initialState, action) => {
    switch(action.type){
        case NewsTypes.GET_NEWS:
            return {
                ...state,
                latest_news: action.payload
            }

        default:
            return state
    }
}

export default NewsReducer;