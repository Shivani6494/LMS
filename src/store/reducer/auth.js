import * as actionType from '../action/type';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: null,
  userId: null,
  loading: false,
  error: null
};

function auth(state = initialState, action) {
  switch (action.type) {
    case actionType.AUTH_SAVE_START:
      return { ...state, loading: true };

    case actionType.AUTH_SAVE_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, token: action.value.idToken, userId: action.value.localId };

    case actionType.AUTH_SAVE_FAILURE:
      return { ...state, loading: false };

    case actionType.AUTH_LOGOUT:
      return { ...state, token: null, userId: null }
    default:
      return state;
  }
}

export default auth;