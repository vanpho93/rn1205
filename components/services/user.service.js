import axios from 'axios';

export default class UserService {
    static async signIn(email, password) {
        const URL = 'https://user1205.herokuapp.com/user/signin';
        const response = await axios.post(URL, { email, password });
        return response.data;
    }
}
