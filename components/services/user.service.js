import axios from 'axios';

export default class UserService {
    static async signIn(email, password) {
        const URL = 'http://localhost:3000/user/signin';
        const response = await axios.post(URL, { email, password });
        return response.data;
    }
}
