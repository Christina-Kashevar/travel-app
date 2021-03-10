import axios from 'axios';

export class AuthService {
  static signUp = async (username, password) => {
    try {
      const result = await axios.post('https://travel-app-rs.herokuapp.com/signup', {username, password})
      return result;
    } catch (err) {
      console.log(err);
      return null
    }    
  }
}