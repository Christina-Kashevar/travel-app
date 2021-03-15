import axios from 'axios';

export class AuthService {
  static signUp = async (userData) => {
    try {
      const result = await axios.post('https://travel-app-rs.herokuapp.com/signup', userData);
      AuthService.signIn({ username: userData.username, password: userData.password });
      return result;
    } catch (err) {
      return err;
    }
  };

  static signIn = async (userData) => {
    try {
      const result = await axios.post('https://travel-app-rs.herokuapp.com/users/login', userData);
      localStorage.setItem('token', result.data.token);
      AuthService.whoAmI();
    } catch (err) {
      return err;
    }
  };

  static whoAmI = async () => {
    try {
      const token = localStorage.getItem('token');
      const result = await axios.get(
        'https://travel-app-rs.herokuapp.com/whoAmI',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return result;
    } catch (err) {
      return err;
    }
  };
}
