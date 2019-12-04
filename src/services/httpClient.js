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

export const SignUp = async state => {
  const {
    username,
    name,
    email,
    address,
    phone,
    cardID,
    gender,
    role,
    dob,
    password
  } = state;
  try {
    const response = await instance.post('/users/register', {
      username,
      name,
      email,
      address,
      phone,
      cardID,
      gender,
      role,
      dob,
      password
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const GetProfile = async () => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await instance.get('/users/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const SignOut = async () => {};
