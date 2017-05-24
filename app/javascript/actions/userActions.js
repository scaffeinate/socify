import * as actionTypes from './actionTypes';

export function fetchCurrentUserSuccess(currentUser) {
  return {
    type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
    currentUser
  };
}

export function fetchUserSuccess(user) {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user
  };
}
