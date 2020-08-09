import { takeLatest, call, put, fork, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
} from '../reducers/user';

//---------------------------------------------------------------

function signUpAPI(data) { // 가입하기
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
//---------------------------------------------------------------

function LogInAPI(data) { // 로그인하기
  return axios.post('/user/login', data);
}

function* LogIn(action) {
  try {
    const result = yield call(LogInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, LogIn);
}
//---------------------------------------------------------------
function LogOutAPI() { // 로그아웃하기
  return axios.post('/user/logout');
}

function* LogOut() {
  try {
    const result = yield call(LogOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, LogOut);
}

//-----------------------------------------------------------------
function LoadUserAPI() { // 유저정보 불러오기
  return axios.get('/user');
}

function* LoadUser() {
  try {
    const result = yield call(LoadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e.response);
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, LoadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadUser),
  ]);
}
