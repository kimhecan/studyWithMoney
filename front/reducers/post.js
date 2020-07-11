import produce from 'immer';

export const initialState = {
  postInfos: [],
  imagePaths: [],
  updateImagePaths: [],
  addPostMessage: null,
  updatePostMessage: null,
  hasMorePosts: true,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const UPLOAD_UPDATE_IMAGES_REQUEST = 'UPLOAD__UPDATE_IMAGES_REQUEST';
export const UPLOAD_UPDATE_IMAGES_SUCCESS = 'UPLOAD__UPDATE_IMAGES_SUCCESS';
export const UPLOAD_UPDATE_IMAGES_FAILURE = 'UPLOAD__UPDATE_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const POST_RESET = 'POST_RESET';
export const REMOVE_UPDATE_IMAGE = 'REMOVE_UPDATE_IMAGE';
export const UPDATE_DEfAULT_IMAGES = 'UPDATE_DEfAULT_IMAGES';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

// export const addComment = (data) => ({
//   type: ADD_COMMENT_REQUEST,
//   data,
// });

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      break;
    case ADD_POST_SUCCESS:
      draft.postInfos.unshift(action.data);
      draft.imagePaths = [];
      break;
    case ADD_POST_FAILURE:
      draft.addPostMessage = action.error;
      break;
    case LOAD_POSTS_REQUEST:
      break;
    case LOAD_POSTS_SUCCESS:
      draft.postInfos = draft.postInfos.concat(action.data);
      draft.hasMorePosts = action.data.length === 10;
      break;
    case LOAD_POSTS_FAILURE:
      break;
    case UPDATE_POST_REQUEST:
      break;
    case UPDATE_POST_SUCCESS:
      const post = draft.postInfos.find((v) => v.id === action.data.id);
      post.content = action.data.content;
      post.Images = action.data.Images;
      draft.updatePostMessage = '수정되었습니다';
      break;
    case UPDATE_POST_FAILURE:
      break;
    case DELETE_POST_REQUEST:
      break;
    case DELETE_POST_SUCCESS:
      draft.postInfos = draft.postInfos.filter((v) => v.id !== action.data.PostId);
      break;
    case DELETE_POST_FAILURE:
      break;
    case UPLOAD_IMAGES_REQUEST:
      break;
    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = action.data;
      break;
    case UPLOAD_IMAGES_FAILURE:
      break;
    case UPLOAD_UPDATE_IMAGES_REQUEST:
      break;
    case UPLOAD_UPDATE_IMAGES_SUCCESS:
      draft.updateImagePaths = action.data;
      break;
    case UPLOAD_UPDATE_IMAGES_FAILURE:
      break;
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;
    case REMOVE_UPDATE_IMAGE:
      draft.updateImagePaths = draft.updateImagePaths.filter((v, i) => i !== action.data);
      break;
    case POST_RESET:
      draft.postInfos = [];
      draft.imagePaths = [];
      break;
    case UPDATE_DEfAULT_IMAGES:
      draft.updateImagePaths = action.data;
      break;
    default:
      break;
  }
});

export default reducer;
