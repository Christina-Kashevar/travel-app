import axios from 'axios';

export class AuthService {
  static signUp = async (userData) => {
    try {
      const result = await axios.post('https://travel-app-rs.herokuapp.com/signup', userData);
      return result;
    } catch (err) {
      return err;
    }
  };
}
