import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default class UserService {
    static async signIn(email, password) {
        const URL = 'https://user1205.herokuapp.com/user/signin';
        const response = await axios.post(URL, { email, password });
        return response.data;
    }

    static async check() {
        const token = await AsyncStorage.getItem('token');
        if (!token) throw new Error('No token');
        const URL = 'https://user1205.herokuapp.com/user/check';
        const response = await axios.post(URL, { token });
        if (!response.data.success) throw new Error('Invalid token');
        return response.data.user;
    }
}
