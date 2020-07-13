import { takeLatest, call, put, fork, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
  UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE,
  UPLOAD_UPDATE_IMAGES_REQUEST, UPLOAD_UPDATE_IMAGES_SUCCESS, UPLOAD_UPDATE_IMAGES_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
  DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE,
} from '../reducers/post';

function AddPostAPI(data) { // 포스트 추가하기
  console.log(data, '포스트추가할때 saga에 들어오는 form데이터');
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

function uploadUpdateImagesAPI(data) { // image미리보기를 위해 서버에 저장하고 url 받기
  return axios.post('/post/images', data);
}

function* uploadUpdateImages(action) {
  try {
    const result = yield call(uploadUpdateImagesAPI, action.data);
    yield put({
      type: UPLOAD_UPDATE_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_UPDATE_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUploadUpdateImages() {
  yield takeLatest(UPLOAD_UPDATE_IMAGES_REQUEST, uploadUpdateImages);
}

//-------------------------------------------------------------------------

function loadPostsAPI(data) { // Post로드하기
  console.log(data, 'datadatadatadatadata');
  return axios.get(`/posts?lastId=${data.lastId || 0}&category=${data.category}`);
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data);
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
//----------------------------------------------------------------------
function deletePostAPI(data) { // Post delete하기
  console.log(data, 'delete saga data');
  return axios.delete(`/post/${data}`);
}

function* deletePost(action) {
  try {
    const result = yield call(deletePostAPI, action.data);
    console.log(result, 'result');

    yield put({
      type: DELETE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_POST_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

//------------------------------------------------------------------------
function updatePostAPI(data) { // Post update하기
  console.log(data, 'update saga data');
  return axios.put('/post', data);
}

function* updatePost(action) {
  try {
    const result = yield call(updatePostAPI, action.data);
    console.log(result, 'result');

    yield put({
      type: UPDATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

// ------------------------------------------------------------------
function addCommentAPI(data) { // Post에 댓글달기
  console.log(data, 'sga에서 보내는 데이터');
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    console.log(result, 'addcomment 백엔드에서 받은 데이터');
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

// ---------------------------------------------------------------------
function likePostAPI(data) { // Post에 좋아요
  console.log('likePostAPI에 도착한 data', data);
  return axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    console.log(result, 'like 백엔드에서 받은 데이터');
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

//---------------------------------------------------------------------
function unlikePostAPI(data) { // Post에 좋아요취소
  console.log('likePostAPI에 도착한 data', data);
  return axios.delete(`/post/${data}/unlike`);
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    console.log(result, 'unlike 백엔드에서 받은 데이터');
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

//-----------------------------------------------------------------------
function deleteCommentAPI(data) { // Post에 댓글 삭제
  console.log('deleteCommentAPI에 도착한 data', data);
  return axios.delete(`/post/${data.postId}/comment/${data.commentId}`);
}

function* deleteComment(action) {
  try {
    const result = yield call(deleteCommentAPI, action.data);
    console.log(result, 'deleteComment 백엔드에서 받은 데이터');
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment);
}
export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchUploadImages),
    fork(watchLoadPost),
    fork(watchDeletePost),
    fork(watchUpdatePost),
    fork(watchUploadUpdateImages),
    fork(watchAddComment),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchDeleteComment),

  ]);
}
