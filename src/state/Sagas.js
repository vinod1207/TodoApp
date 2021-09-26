import LoginSaga from './auth/Sagas';

import {all} from 'redux-saga/effects';

export default function* root() {
  yield all([LoginSaga()]);
}
