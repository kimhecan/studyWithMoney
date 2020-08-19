import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_SUBJECTS_REQUEST, LOAD_SUBJECTS_SUCCESS, LOAD_SUBJECTS_FAILURE } from '../reducers/subject';

function loadSubjectAPI(data) {
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

export default function* subjectSaga() {
  yield all([
    fork(watchLoadSubject),
  ]);
}
