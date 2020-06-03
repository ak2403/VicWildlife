import {DonationTypes} from '../type'

let initialState = {
    donation_list: []
}

const DonationReducer = (state=initialState, action) => {
    switch(action.type){
        case DonationTypes.GET_DONATIONS:
            return {
                ...state,
                donation_list: action.payload
            }

        default:
            return state
    }
}

export default DonationReducer;