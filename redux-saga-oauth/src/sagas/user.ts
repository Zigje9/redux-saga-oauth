import { put, fork, takeEvery, all } from 'redux-saga/effects';
import * as type from '../actions/type';
import * as action from '../actions/user';

function* loginSaga() {
  try {
    // do something
    yield put(action.authorizationSuccess());
  } catch (error) {
    yield put(action.authorizationFailure());
    console.log(error);
  }
}

function* watchAuthorizationRequestSaga() {
  yield takeEvery(type.AUTHORIZATION_REQUEST, loginSaga);
}

export default function* userSaga() {
  yield all([fork(watchAuthorizationRequestSaga)]);
}
