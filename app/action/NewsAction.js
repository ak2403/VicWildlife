import * as getAPI from '../api/getAPI'
import {NewsTypes} from '../type'

/** Function that will get the news from the api. */
export const getNews = () => {
    return async dispatch => {
        let getResponse = await getAPI.getNews()
        if(getResponse.status == 200){
            dispatch({
                type: NewsTypes.GET_NEWS,
                payload: getResponse.data
            })
        }
    }
}
