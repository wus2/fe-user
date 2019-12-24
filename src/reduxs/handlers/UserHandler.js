import * as HttpClient from 'services/httpClient';

export const SignIn = async (username, password) => {
  const rs = await HttpClient.SignIn(username, password);
  return rs;
};

export const SignUp = async state => {
  const rs = await HttpClient.SignUp(state);

  return rs;
};

export const GetProfile = async () => {
  const rs = await HttpClient.GetProfile();
  return rs;
};

export const UpdateProfile = async state => {
  const rs = await HttpClient.UpdateProfile(state);

  return rs;
};

export const UpdatePassword = async state => {
  const rs = await HttpClient.UpdatePassword(state);

  return rs;
};

export const UpdateAvatar = async data => {
  const rs = await HttpClient.UpdateAvatar(data);

  return rs;
};

export const UpdateSkill = async skills => {
  const rs = await HttpClient.UpdateSkill(skills);

  return rs;
};

export const UpdateIntroduce = async introDesc => {
  const rs = await HttpClient.UpdateIntroduce(introDesc);

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

export const RentTutor = async state => {
  const rs = await HttpClient.RentTutor(state);
  return rs;
};

export const GetListNoti = async offset => {
  const rs = await HttpClient.GetListNoti(offset);
  return rs;
};

export const GetListHisDeal = async offset => {
  const rs = await HttpClient.GetListHisDeal(offset);
  return rs;
};

export const GetDetailDeal = async contractID => {
  const rs = await HttpClient.GetDetailDeal(contractID);
  return rs;
};

export const FilterTutor = async (offset, state) => {
  const rs = await HttpClient.FilterTutor(offset, state);
  return rs;
};
