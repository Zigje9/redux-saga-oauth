import { put, call, fork, take, all } from 'redux-saga/effects';
import * as type from '../actions/type';
import * as userAction from '../actions/user';
import * as loadingAction from '../actions/loading';
import { getAccessToken } from '../api/axios';

interface TokenData {
  data: {
    token: string;
  };
}

interface UserData {
  data: {
    userId: string;
  };
}

function* authenticationSaga(
  code: string,
  stateCode: string,
  site: string,
): Generator {
  yield put(loadingAction.loadingStart(true));
  try {
    const response = yield call(getAccessToken, code, stateCode, site);
    const { data } = response as TokenData;
    const accessToken = data.token;
    yield put(userAction.authenticationSuccess(accessToken));
    yield put(loadingAction.loadingEnd(false));
  } catch (error) {
    yield put(userAction.authenticationFailure());
    console.log(error);
  }
}

function* loginSaga(accessToken: string): Generator {
  try {
    const response = yield call(getUserInfo, accessToken); // api call to server
    const { data } = response as UserData;
    const userId = data.userId;
    yield put(userAction.loginSuccess(true, userId));
  } catch (error) {
    yield put(userAction.loginFailure(false));
    console.log(error);
  }
}

function* watchAuthenticationRequestSaga(): Generator {
  while (true) {
    const response = yield take(type.AUTHENTICATION_REQUEST);
    const { code, stateCode, site } = response as ReturnType<
      typeof userAction.authenticationRequest
    >;
    yield call(authenticationSaga, code, stateCode, site);
  }
}

function* watchLoginRequestSaga(): Generator {
  while (true) {
    const response = yield take(type.LOGIN_REQUEST); // get access_token from local_storage
    const { accessToken } = response as ReturnType<
      typeof userAction.loginRequest
    >;
    yield call(loginSaga, accessToken);
  }
}

export default function* userSaga() {
  yield all([
    fork(watchAuthenticationRequestSaga),
    fork(watchLoginRequestSaga),
  ]);
}
