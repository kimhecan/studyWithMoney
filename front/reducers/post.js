import produce from '../util/produce';

export const initialState = {
  boardPosts: [],
  imagePaths: [],
  updateImagePaths: [],
  addPostMessage: null,
  updatePostMessage: null,
  addCommentMessage: null,
  addReCommentMessage: null,
  addLikeMessage: null,
  deleteCommentMessage: null,
  hasMorePosts: false,
  reportMessage: null,
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

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_RECOMMENT_REQUEST = 'ADD_RECOMMENT_REQUEST';
export const ADD_RECOMMENT_SUCCESS = 'ADD_RECOMMENT_SUCCESS';
export const ADD_RECOMMENT_FAILURE = 'ADD_RECOMMENT_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

export const DELETE_RECOMMENT_REQUEST = 'DELETE_RECOMMENT_REQUEST';
export const DELETE_RECOMMENT_SUCCESS = 'DELETE_RECOMMENT_SUCCESS';
export const DELETE_RECOMMENT_FAILURE = 'DELETE_RECOMMENT_FAILURE';

export const REPORT_POST_REQUEST = 'REPORT_POST_REQUEST';
export const REPORT_POST_SUCCESS = 'REPORT_POST_SUCCESS';
export const REPORT_POST_FAILURE = 'REPORT_POST_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const POST_RESET = 'POST_RESET';
export const REMOVE_UPDATE_IMAGE = 'REMOVE_UPDATE_IMAGE';
export const UPDATE_DEfAULT_IMAGES = 'UPDATE_DEfAULT_IMAGES';
export const RESET_REPORT_MESSAGE = 'RESET_REPORT_MESSAGE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      break;
    case ADD_POST_SUCCESS:
      draft.boardPosts.unshift(action.data);
      draft.imagePaths = [];
      break;
    case ADD_POST_FAILURE:
      draft.addPostMessage = action.error;
      break;
    case LOAD_POSTS_REQUEST:
      break;
    case LOAD_POSTS_SUCCESS:
      draft.boardPosts = draft.boardPosts.concat(action.data);
      draft.hasMorePosts = action.data.length === 10;
      break;
    case LOAD_POSTS_FAILURE:
      break;
    case UPDATE_POST_REQUEST:
      break;
    case UPDATE_POST_SUCCESS:
      const post = draft.boardPosts.find((v) => v.id === action.data.id);
      post.content = action.data.content;
      post.Images = action.data.Images;
      draft.updatePostMessage = '수정되었습니다';
      break;
    case UPDATE_POST_FAILURE:
      break;
    case DELETE_POST_REQUEST:
      break;
    case DELETE_POST_SUCCESS:
      draft.boardPosts = draft.boardPosts.filter((v) => v.id !== action.data.PostId);
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
    case ADD_COMMENT_REQUEST:
      break;
    case ADD_COMMENT_SUCCESS:
      const postForAddComment = draft.boardPosts.find((v) => v.id === action.data.PostId);
      postForAddComment.Comments.unshift(action.data);
      break;
    case ADD_COMMENT_FAILURE:
      draft.addCommentMessage = action.data;
      break;
    case ADD_RECOMMENT_REQUEST:
      break;
    case ADD_RECOMMENT_SUCCESS:
      const postForAddReCmt = draft.boardPosts.find((v) => v.id === action.data.PostId);
      const cmtForAddReCmt = postForAddReCmt.Comments.find((v) => v.id === action.data.id);
      cmtForAddReCmt.ReComments.push(action.data.ReComments[0]);
      break;
    case ADD_RECOMMENT_FAILURE:
      draft.addReCommentMessage = action.data;
      break;
    case LIKE_POST_REQUEST:
      break;
    case LIKE_POST_SUCCESS:
      const postForLike = draft.boardPosts.find((v) => v.id === action.data.PostId);
      postForLike.Likers.push({ id: action.data.UserId });
      break;
    case LIKE_POST_FAILURE:
      draft.addLikeMessage = action.data;
      break;
    case UNLIKE_POST_REQUEST:
      break;
    case UNLIKE_POST_SUCCESS:
      const postforUnlike = draft.boardPosts.find((v) => v.id === action.data.PostId);
      postforUnlike.Likers = postforUnlike.Likers.filter((v) => v.id !== action.data.UserId);
      break;
    case UNLIKE_POST_FAILURE:
      draft.addLikeMessage = action.data;
      break;
    case DELETE_COMMENT_REQUEST:
      break;
    case DELETE_COMMENT_SUCCESS:
      const postForDelCmt = draft.boardPosts.find((v) => v.id === action.data.PostId);
      postForDelCmt.Comments = postForDelCmt.Comments.filter((v) => v.id !== action.data.CommentId);
      break;
    case DELETE_COMMENT_FAILURE:
      draft.deleteCommentMessage = action.data;
      break;
    case DELETE_RECOMMENT_REQUEST:
      break;
    case DELETE_RECOMMENT_SUCCESS:
      const postForDelReCmt = draft.boardPosts.find((v) => v.id === action.data.PostId);
      const cmtForDelReCmt = postForDelReCmt.Comments.find((v) => v.id === action.data.CommentId);
      cmtForDelReCmt.ReComments = cmtForDelReCmt.ReComments.filter((v) => v.id !== action.data.ReCommentId);
      break;
    case DELETE_RECOMMENT_FAILURE:
      draft.deleteCommentMessage = action.data;
      break;
    case REPORT_POST_REQUEST:
      break;
    case REPORT_POST_SUCCESS:
      draft.reportMessage = action.data;
      break;
    case REPORT_POST_FAILURE:
      break;
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;
    case REMOVE_UPDATE_IMAGE:
      draft.updateImagePaths = draft.updateImagePaths.filter((v, i) => i !== action.data);
      break;
    case POST_RESET:
      draft.boardPosts = [];
      draft.imagePaths = [];
      break;
    case UPDATE_DEfAULT_IMAGES:
      draft.updateImagePaths = action.data;
      break;
    case RESET_REPORT_MESSAGE:
      draft.reportMessage = null;
      break;
    default:
      break;
  }
});

export default reducer;
