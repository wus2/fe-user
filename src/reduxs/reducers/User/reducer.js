import ActionTypes from './actionTypes';

const INITIAL_STATE = {
  isSignIn: false,
  isSignUp: false,
  username: '',
  name: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        username: action.payload.username,
        name: action.payload.name
      };
    case ActionTypes.SIGN_UP:
      return { ...state, isSignUp: action.payload };
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.REMOVE_TOKEN:
      return { ...state, username: '', name: '' };
    default:
      return { ...state };
  }
};

export default userReducer;
