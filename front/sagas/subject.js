import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_SUBJECTS_REQUEST, LOAD_SUBJECTS_SUCCESS, LOAD_SUBJECTS_FAILURE,
  ADD_MY_SUBJECTS_REQUEST, ADD_MY_SUBJECTS_SUCCESS, ADD_MY_SUBJECTS_FAILURE,
  LOAD_MY_SUBJECTS_REQUEST, LOAD_MY_SUBJECTS_SUCCESS, LOAD_MY_SUBJECTS_FAILURE,
  DELETE_MY_SUBJECTS_REQUEST, DELETE_MY_SUBJECTS_SUCCESS, DELETE_MY_SUBJECTS_FAILURE,
} from '../reducers/subject';

function loadSubjectAPI(data) { // 과목 검색
  console.log(data);
  return axios.get(`/subjects/${data.collage || 'null'}/${data.department || 'null'}/${data.grade || 'null'}/${data.subject || 'null'}`);
}

function* loadSubject(action) {
  try {
    const result = yield call(loadSubjectAPI, action.data);
    console.log(result.data);
    yield put({
      type: LOAD_SUBJECTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SUBJECTS_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchLoadSubject() {
  yield takeLatest(LOAD_SUBJECTS_REQUEST, loadSubject);
}
//-----------------------------------------------------------------------
function addMySubjectAPI(data) { // 과목 즐겨찾기 추가
  console.log(data);
  return axios.post('subjects/mysubject', data);
}

function* addMySubject(action) {
  try {
    const result = yield call(addMySubjectAPI, action.data);
    console.log(result.data);
    yield put({
      type: ADD_MY_SUBJECTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_MY_SUBJECTS_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchAddMySubject() {
  yield takeLatest(ADD_MY_SUBJECTS_REQUEST, addMySubject);
}

//-------------------------------------------------------------------------
function loadMySubjectAPI() { // 과목 즐겨찾기 로드
  return axios.get('subjects/mysubject');
}

function* loadMySubject() {
  try {
    const result = yield call(loadMySubjectAPI);
    console.log(result.data);
    yield put({
      type: LOAD_MY_SUBJECTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_SUBJECTS_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchLoadMySubject() {
  yield takeLatest(LOAD_MY_SUBJECTS_REQUEST, loadMySubject);
}

//-------------------------------------------------------------------------
function delMySubjectAPI(data) { // 과목 즐겨찾기 삭제
  return axios.delete(`subjects/mysubject/${data.suupNo}`);
}

function* delMySubject(action) {
  try {
    const result = yield call(delMySubjectAPI, action.data);
    yield put({
      type: DELETE_MY_SUBJECTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_MY_SUBJECTS_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchDelMySubject() {
  yield takeLatest(DELETE_MY_SUBJECTS_REQUEST, delMySubject);
}
export default function* subjectSaga() {
  yield all([
    fork(watchLoadSubject),
    fork(watchAddMySubject),
    fork(watchLoadMySubject),
    fork(watchDelMySubject),
  ]);
}
