import ActionTypes from './actionTypes';

const INITIAL_STATE = {
  isSignIn: false,
  isSignUp: false,
  username: null,
  avatar: null,
  name: null,
  role: null,
  token: null,
  user: null,
  skills: null,
  tutors: null,
  errors: null,
  tutor: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        username: action.payload.username,
        name: action.payload.name,
        role: action.payload.role,
        avatar: action.payload.avatar
      };
    case ActionTypes.SIGN_UP:
      return { ...state, isSignUp: action.payload };
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.REMOVE_TOKEN:
      return {
        ...state,
        username: null,
        name: null,
        token: null,
        avatar: null
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        username: null,
        name: null,
        token: null,
        isSignIn: false,
        isSignUp: false,
        user: null,
        avatar: null
      };
    case ActionTypes.GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        isSignIn: true,
        username: action.payload.username,
        name: action.payload.name,
        role: action.payload.role,
        avatar: action.payload.avatar
      };
    case ActionTypes.UPDATE_PROFILE:
      return { ...state, name: action.payload.name, user: action.payload.user };
    case ActionTypes.GET_SKILLS:
      return { ...state, skills: action.payload };
    case ActionTypes.GET_LIST_TUTOR:
      return { ...state, tutors: action.payload };
    case ActionTypes.GET_ERROR:
      return { ...state, errors: action.payload };
    case ActionTypes.REMOVE_ERROR:
      return { ...state, errors: null };
    case ActionTypes.GET_TUTOR_PROFILE:
      return { ...state, tutor: action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
