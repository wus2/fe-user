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
  return rs;
};

export const UpdateProfile = async state => {
  const rs = await HttpClient.UpdateProfile(state);
  console.log(rs);
  return rs;
};

export const UpdatePassword = async state => {
  const rs = await HttpClient.UpdatePassword(state);
  console.log(rs);
  return rs;
};

export const UpdateAvatar = async data => {
  const rs = await HttpClient.UpdateAvatar(data);
  console.log(rs);
  return rs;
};

export const UpdateSkill = async skills => {
  const rs = await HttpClient.UpdateSkill(skills);
  console.log(rs);
  return rs;
};

export const UpdateIntroduce = async introDesc => {
  const rs = await HttpClient.UpdateIntroduce(introDesc);
  console.log(rs);
  return rs;
};

export const GetSkills = async () => {
  const rs = await HttpClient.GetSkills();
  return rs;
};

export const GetListTutor = async offset => {
  const rs = await HttpClient.GetListTutor(offset);
  return rs;
};

export const GetProfileTutor = async tutorID => {
  const rs = await HttpClient.GetProfileTutor(tutorID);
  return rs;
};
