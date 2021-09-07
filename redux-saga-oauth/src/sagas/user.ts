import { put, call, fork, take, all } from 'redux-saga/effects';
import * as type from '../actions/type';
import * as action from '../actions/user';
import { getAccessToken } from '../api/axios';

interface TokenData {
  data: {
    access_token: string;
  };
}

function* authenticationSaga(
  code: string,
  stateCode: string,
  site: string,
): Generator {
  try {
    const response = yield call(getAccessToken, code, stateCode, site);
    console.log(response);
    const { data } = response as TokenData;
    const accessToken = data.access_token;
    yield put(action.authenticationSuccess(accessToken));
  } catch (error) {
    yield put(action.authenticationFailure());
    console.log(error);
  }
}

function* watchAuthenticationRequestSaga(): Generator {
  const response = yield take(type.AUTHENTICATION_REQUEST);
  const { code, stateCode, site } = response as ReturnType<
    typeof action.authenticationRequest
  >;
  yield call(authenticationSaga, code, stateCode, site);
}

export default function* userSaga() {
  yield all([fork(watchAuthenticationRequestSaga)]);
}
