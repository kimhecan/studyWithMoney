import produce from '../util/produce';

export const initialState = {
  me: null,
  signUpMessage: null,
  logInMessage: null,
  loadUserMessage: null,

};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const RESET_SIGN_UP_MESSAGE = 'RESET_SIGN_UP_MESSAGE';
export const RESET_LOG_IN_MESSAGE = 'RESET_LOG_IN_MESSAGE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpMessage = action.data ? action.data : null;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpMessage = action.error;
      break;
    case LOG_IN_REQUEST:
      break;
    case LOG_IN_SUCCESS:
      draft.me = action.data;
      break;
    case LOG_IN_FAILURE:
      draft.logInMessage = action.error;
      break;
    case LOG_OUT_REQUEST:
      break;
    case LOG_OUT_SUCCESS:
      draft.me = {};
      break;
    case LOG_OUT_FAILURE:
      break;
    case LOAD_USER_REQUEST:
      break;
    case LOAD_USER_SUCCESS:
      draft.me = action.data;
      break;
    case LOAD_USER_FAILURE:
      draft.loadUserMessage = action.data ? action.data : null;
      break;
    case RESET_SIGN_UP_MESSAGE:
      draft.signUpMessage = null;
      break;
    case RESET_LOG_IN_MESSAGE:
      draft.logInMessage = null;
      break;

    default:
      break;
  }
});

export default reducer;
