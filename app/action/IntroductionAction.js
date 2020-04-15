import AsyncStorage from '@react-native-community/async-storage';
import { IntroductionTypes } from '../type'

export const completedOnboarding = () => {
    return async dispatch => {
        try {
            console.log("############# dispatch ##############")
            const getResponse = await AsyncStorage.getItem('@storage_Key')
            // let getResponse = await AsyncStorage.setItem('@storage_Key', 'stored value')
            console.log(getResponse)
        } catch (e) {
            // saving error
        }
    }
}