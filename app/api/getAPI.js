import axios from 'axios'

export const getNearbyPlaces = props => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=wildlife+service&location=${props.latitude},${props.longitude}&radius=10000&key=AIzaSyDjmjxldP1f0EwBuQ7mFUKPdK7jYfwUJow`)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400
            }
        })
}

export const getQuizQuestions = props => {
    return axios.get(`https://opentdb.com/api.php?amount=${props.numberOfQuestions}&category=27&difficulty=${props.difficultyLevel}&type=${props.typeOfQuestions}`)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400
            }
        })
}
