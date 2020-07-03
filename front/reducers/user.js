import produce from 'immer';

export const initialState = {
  info: {
    id: null,
    password: null,
    nickname: null,
    email: null,
    grade: null,
    department: null,
  },
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

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const joinRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.info.id = action.data.id;
      draft.info.password = action.data.password;
      break;
    case LOG_IN_SUCCESS:
      break;
    case LOG_IN_FAILURE:
      draft.info.logInError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.info = action.data;
      break;
    case SIGN_UP_SUCCESS:
      break;
    case SIGN_UP_FAILURE:
      draft.info.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.info = {
        id: null, password: null, nickname: null,
        email: null, grade: null, department: null,
      };
      break;
    case LOG_OUT_SUCCESS:
      break;
    case LOG_OUT_FAILURE:
      break;
    default:
      break;
  }
});

export default reducer;
