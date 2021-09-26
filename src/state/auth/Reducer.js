import Immutable from 'seamless-immutable';
import {
  LOGIN_ACCOUNT,
  RESET_LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_ERROR,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_SOCIAL_ACCOUNT,
} from '../ActionTypes';
import {createReducer} from '../CreateReducer';

const INITIAL_STATE = Immutable({
  loginData: null,
  isFetching: false,
  error: null,
  userDetailsInfo: null,
});

const reducers = {
  //Login account data
  [LOGIN_ACCOUNT || LOGIN_SOCIAL_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, {loginData: null, isFetching: true});
  },

  [RESET_LOGIN_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, {loginData: null, error: null});
  },

  [LOGIN_ACCOUNT_SUCCESS]: (state, {data}) => {
    return Immutable.merge(state, {
      loginData: data,
      isFetching: false,
      error: null,
    });
  },

  [LOGIN_ACCOUNT_ERROR]: (state, {error, id}) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
      userId: id,
    });
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
