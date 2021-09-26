import {call, put, takeLatest} from 'redux-saga/effects';
import API from '../../services/API';
import {LOGIN_ENDPOINT} from '../../utils/constants/apiEndpoints';
import {LOGIN_ACCOUNT} from '../ActionTypes';
import * as LoginActions from './Actions';

function* loginAccount(action) {
  console.log('loginAccount== ', action);

  try {
    const response = yield call(API.post, LOGIN_ENDPOINT, action.payload);

    console.log('Login Response== ', JSON.stringify(response));

    yield put(LoginActions.loginAccountSuccess(response));
  } catch (e) {
    yield put(LoginActions.loginAccountError(e));
  }
}

export default function* root() {
  yield [yield takeLatest(LOGIN_ACCOUNT, loginAccount)];
}
