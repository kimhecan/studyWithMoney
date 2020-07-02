import produce from 'immer';
import faker from 'faker';
import shortId from 'shortId';

export const initialState = {
  id: null,
  password: null,
  nickname: null,
  email: null,
  grade: null,
  department: null,

};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const joinRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const dummyUser = (number) => Array(number).fill().map(() => ({
  id: shortId.generate(),
  nickname: faker.name.findName(),
}));

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.id = action.data.id;
      draft.password = action.data.password;
      break;
    case LOG_IN_SUCCESS:
      draft.user = dummyUser(action.data);
      break;
    case LOG_IN_FAILURE:
      draft.logInError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.id = action.data.id;
      draft.password = action.data.password;
      draft.nickname = action.data.nickname;
      draft.email = action.data.email;
      draft.grade = action.data.grade;
      draft.department = action.data.department;
      break;
    case SIGN_UP_SUCCESS:
      draft.user = dummyUser(action.data);
      break;
    case SIGN_UP_FAILURE:
      draft.logInError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
