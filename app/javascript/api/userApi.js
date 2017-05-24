import store from '../store/index';
import { fetchCurrentUserSuccess, fetchUserSuccess } from '../actions/userActions';

export function fetchCurrentUser() {
  store.dispatch(fetchCurrentUserSuccess({}));
}

export function fetchUser(userId) {
  store.dispatch(fetchUserSuccess({ id: userId }));
}
