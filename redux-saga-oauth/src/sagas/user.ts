import { put, call, fork, take, all } from 'redux-saga/effects';
import * as type from '../actions/type';
import * as action from '../actions/user';
import { getAccessToken } from '../api/axios';

function* authenticationSaga(code: string, stateCode: string): Generator {
  try {
    const accessToken = yield call(getAccessToken, code, stateCode);
    if (typeof accessToken === 'string') {
      yield put(action.authenticationSuccess(accessToken));
    }
  } catch (error) {
    yield put(action.authenticationFailure());
    console.log(error);
  }
}

function* watchAuthenticationRequestSaga(): Generator {
  const res = yield take(type.AUTHENTICATION_REQUEST);
  const { code, stateCode } = res as ReturnType<
    typeof action.authenticationRequest
  >;
  yield call(authenticationSaga, code, stateCode);
}

export default function* userSaga() {
  yield all([fork(watchAuthenticationRequestSaga)]);
}
