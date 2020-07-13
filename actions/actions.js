import { USER_LOGIN, USER_SIGNUP } from '../constants/Login';

export function userLogin(action) {
  return {
    type: USER_LOGIN,
    payload: action.payload,
    callback: action.callback,
  };
}

export function userSignup(params) {
  return {
    type: USER_SIGNUP,
    payload: params,
  };
}
