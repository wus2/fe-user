import * as HttpClient from 'services/httpClient';

export const SignIn = async (username, password) => {
  const rs = await HttpClient.SignIn(username, password);
  return rs;
};

export const SignUp = async (nickname, username, password) => {
  const rs = await HttpClient.SignUp(nickname, username, password);
  console.log(rs);
  return rs;
};
