const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://wusbeuser.herokuapp.com',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
  }
});

export const SignIn = async (username, password) => {
  try {
    const response = await instance.post('/user/login', {
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
    const response = await instance.post('/user/register', {
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
    const response = await instance.get('/user/profile', {
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
      '/user/updateprofile',
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
      '/user/updatepassword',
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
    const response = await instance.post('/user/updateavatar', data, config);
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
    const response = await instance.put(
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

export const GetSkills = async () => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await instance.get('/tutor/getallskills', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const GetListTutor = async offset => {
  try {
    const response = await instance.get(
      `tutor/getlist/page/${offset}/limit/12`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const GetProfileTutor = async tutorID => {
  try {
    const response = await instance.get(`/tutor/getprofile/${tutorID}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const RentTutor = async state => {
  const token = window.localStorage.getItem('token');
  const {
    startTime,
    tutorID,
    tutorUsername,
    rentTime,
    rentPrice,
    description
  } = state;
  try {
    const response = await instance.post(
      '/tutee/renttutor',
      {
        startTime,
        tutorID,
        tutorUsername,
        rentTime,
        rentPrice,
        description
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
