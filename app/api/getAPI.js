import DonationData from '../data/donation.json'
import NewsData from '../data/news.json'
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

export const getLocationDetails = id => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,formatted_phone_number,formatted_address,opening_hours,website&key=AIzaSyDjmjxldP1f0EwBuQ7mFUKPdK7jYfwUJow`)
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
    let url = `https://opentdb.com/api.php?amount=${props.numberOfQuestions}&category=27&difficulty=${props.difficultyLevel}`;
    let typeQuestion = props.typeOfQuestions != 'any' ? `&type=${props.typeOfQuestions}` : "";
    url = typeQuestion == '' ? url : url+typeQuestion;
    
    return axios.get(url)
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

export const getSpecies = () => {
    return axios.get("http://backtonature.herokuapp.com/spices")
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

export const getNews = () => {
    return axios.get(`https://api.breakingapi.com/news?q=wildlife&type=headlines&locale=en-AU&output=json&page_size=50&api_key=2BA974BA400C4F94B9F0C1247A15B00F`)
        .then(response => {
            return {
                status: 200,
                data: response.data.articles
            }
        })
        .catch(err => {
            return {
                status: 400
            }
        })
    // return {
    //     status: 200,
    //     data: NewsData.articles
    // }
}

export const getDonations = () => {
    return {
        status: 200,
        data: DonationData
    }
}