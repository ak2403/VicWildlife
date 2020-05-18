const LocationTypes = {
    'GET_NEARBY_PLACES': 'get the nearby wildlife service',
    'BOOKMARK_LOCATION': 'bookmark the location',
    'GET_LOCATION_DETAILS': 'get the location details',
    'CLOSE_LOCATION_DETAILS': 'closr the location details'
}

const PerformanceTypes = {
    'GET_QUIZ_QUESTIONS': 'get the question list for the user',
    'RESET_QUIZ_OPTIONS': 'reset the quiz options',
    'SAVE_QUIZ_STATISTICS': 'save the quiz statistics'
}

const IntroductionTypes = {
    'COMPLETED_ONBOARDING': 'completed onboarding',
    'APP_LOADED': 'runs when app loads first',
    'SHOW_MENU': 'show the menu in the app',
    'CHANGE_APP_THEME': 'change the user app theme',
    'TOGGLE_DARK_THEME': 'toggle between the dark theme',
    'CHECK_NETWORK': 'check for the network connection',
    'TOGGLE_OFFLINE_MODE': 'toggle with offline mode'
}

const SpeciesTypes = {
    'GET_SPECIES_LIST': 'get the species list',
    'GET_BOOKMARK_SPECIES': 'store and send the list to reducer'
}

const NewsTypes = {
    'GET_NEWS': 'get the news from api'
}

const DonationTypes = {
    'GET_DONATIONS': 'get the donation list'
}

export { LocationTypes, PerformanceTypes, IntroductionTypes, SpeciesTypes, NewsTypes, DonationTypes }