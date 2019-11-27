const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const SignIn = async (username, password) => {
  try {
    const response = await instance.post('/user/login', { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const SignUp = async (nickname, username, password) => {
  try {
    const response = await instance.post('/user/register', {
      nickname,
      username,
      password
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const SignOut = async () => {};
