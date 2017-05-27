import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentUser: {}
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser });
    case actionTypes.FETCH_USER_SUCCESS:
      break;
    default: break;
  }
  return state;
};

export default userReducer;
