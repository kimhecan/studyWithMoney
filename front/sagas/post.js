import { takeLatest, call, put, fork, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
} from '../reducers/post';

function AddPostAPI(data) { // 포스트 추가하기
  console.log(data, 'saga');
  return axios.post('/post', data);
}

function* AddPost(action) {
  try {
    const result = yield call(AddPostAPI, action.data);
    console.log(result.data, '유저정보불러오기');
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_POST_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, AddPost);
}

//----------------------------------------------------------------------

function uploadImagesAPI(data) { // image미리보기를 위해 서버에 저장하고 url 받기
  return axios.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

//-------------------------------------------------------------------------

function laodPostsAPI(data) { // Post로드하기
  console.log(data, 'datadatadatadatadata');
  return axios.get(`/posts?lastId=${data.lastId || 0}&category=${data.category}`);
}

function* loadPosts(action) {
  try {
    const result = yield call(laodPostsAPI, action.data);
    console.log(result, 'result');

    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchUploadImages),
    fork(watchLoadPost),
    // fork(watchUpdatePost),
    // fork(watchDeletePost),
  ]);
}
