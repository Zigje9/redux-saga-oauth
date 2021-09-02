import { put, fork, takeEvery, all } from 'redux-saga/effects';
import * as type from '../actions/type';
import * as action from '../actions/user';

function* loginSaga() {
  try {
    // do something
    yield put(action.authenticationSuccess());
  } catch (error) {
    yield put(action.authenticationFailure());
    console.log(error);
  }
}

function* watchAuthenticationRequestSaga() {
  yield takeEvery(type.AUTHENTICATION_REQUEST, loginSaga);
}

export default function* userSaga() {
  yield all([fork(watchAuthenticationRequestSaga)]);
}
