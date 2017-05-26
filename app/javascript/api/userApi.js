import axios from 'axios';
import store from '../store/index';
import { fetchCurrentUserSuccess, fetchUserSuccess } from '../actions/userActions';

export function fetchCurrentUser() {
  return axios.get('/api/v1/users/current')
    .then((response) => {
      store.dispatch(fetchCurrentUserSuccess(response.data));
      return response;
    });
}

export function fetchUser(userId) {
  store.dispatch(fetchUserSuccess({ id: userId }));
}
