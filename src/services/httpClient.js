const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://wusbeuser.herokuapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
  }
});

export const SignIn = async (username, password) => {
  try {
    const response = await instance.post('/users/login', {
      username,
      password
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const SignUp = async (nickname, username, password) => {
  try {
    const response = await instance.post('/users/register', {
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
