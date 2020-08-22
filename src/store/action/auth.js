import axios from 'axios';

import * as actionTypes from './type';

export const auth = (credentials, isSignUp) => {
  console.log("'credentials...", credentials)

  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-gVyPkZoV-yKxVaW3bUQqU7oC7bu8d2g';

  if (isSignUp) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-gVyPkZoV-yKxVaW3bUQqU7oC7bu8d2g';
  } else {
    credentials = { ...credentials, returnSecureToken: true }
  }

  return dispatch => {
    dispatch(authStart());
    axios.post(url,
      credentials).then(response => {
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationDate', new Date(new Date().getTime() + response.data.expiresIn * 1000));

        dispatch(authSuccess(response.data));
      }).catch(error => {
        console.log("auth error", error);
        dispatch(authFailure(error));
      })
  }
}

export const authStart = () => {
  return { type: actionTypes.AUTH_SAVE_START }
}

export const authSuccess = (authData) => {
  return { type: actionTypes.AUTH_SAVE_SUCCESS, value: authData }
}

export const authFailure = (error) => {
  return { type: actionTypes.AUTH_SAVE_FAILURE, value: error }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    dispatch(authLogout());
  }
}

export const authLogout = () => {
  return { type: actionTypes.AUTH_LOGOUT }
}