import { GET_TOKEN_USER } from './Type'
import { AsyncStorage } from 'react-native';

async function getTokenUser() {
    let userToken;
    try {
        userToken = await AsyncStorage.getItem('userToken');
    } catch (e) {
        // Restoring token failed
    }
    return {
        type: GET_TOKEN_USER,
        userToken: userToken
    }
}