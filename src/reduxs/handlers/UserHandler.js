import * as HttpClient from 'services/httpClient';

export const SignIn = async (username, password) => {
  const rs = await HttpClient.SignIn(username, password);
  return rs;
};

export const SignUp = async state => {
  const rs = await HttpClient.SignUp(state);
  console.log(rs);
  return rs;
};

export const GetProfile = async () => {
  const rs = await HttpClient.GetProfile();
  console.log(rs);
  return rs;
};
