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

export const UpdateProfile = async state => {
  const token = window.localStorage.getItem('token');
  const { name, address, phone, cardID, gender, dob, district, price } = state;
  try {
    const response = await instance.post(
      '/users/updateprofile',
      {
        name,
        address,
        phone,
        cardID,
        gender,
        dob,
        district,
        price
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const UpdatePassword = async state => {
  const { email, password } = state;
  try {
    const token = window.localStorage.getItem('token');
    const response = await instance.post(
      '/users/updatepassword',
      {
        email,
        password
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const UpdateAvatar = async data => {
  const token = window.localStorage.getItem('token');
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await instance.post('/users/updateavatar', data, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const UpdateSkill = async skills => {
  const token = window.localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await instance.post(
      '/tutor/updateskills',
      { skills },
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const UpdateIntroduce = async introDesc => {
  const token = window.localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await instance.put(
      '/tutor/updateintro',
      { introDesc },
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
