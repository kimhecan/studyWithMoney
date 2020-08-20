import produce from '../util/produce';

export const initialState = {
  subjects: [],
  subjectsLoading: false,
  mysubjects: [],
};

export const LOAD_SUBJECTS_REQUEST = 'LOAD_SUBJECTS_REQUEST';
export const LOAD_SUBJECTS_SUCCESS = 'LOAD_SUBJECTS_SUCCESS';
export const LOAD_SUBJECTS_FAILURE = 'LOAD_SUBJECTS_FAILURE';

export const ADD_MY_SUBJECTS_REQUEST = 'ADD_MY_SUBJECTS_REQUEST';
export const ADD_MY_SUBJECTS_SUCCESS = 'ADD_MY_SUBJECTS_SUCCESS';
export const ADD_MY_SUBJECTS_FAILURE = 'ADD_MY_SUBJECTS_FAILURE';

export const DELETE_MY_SUBJECTS_REQUEST = 'DELETE_MY_SUBJECTS_REQUEST';
export const DELETE_MY_SUBJECTS_SUCCESS = 'DELETE_MY_SUBJECTS_SUCCESS';
export const DELETE_MY_SUBJECTS_FAILURE = 'DELETE_MY_SUBJECTS_FAILURE';

export const LOAD_MY_SUBJECTS_REQUEST = 'LOAD_MY_SUBJECTS_REQUEST';
export const LOAD_MY_SUBJECTS_SUCCESS = 'LOAD_MY_SUBJECTS_SUCCESS';
export const LOAD_MY_SUBJECTS_FAILURE = 'LOAD_MY_SUBJECTS_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_SUBJECTS_REQUEST:
      draft.subjects = [];
      draft.subjectsLoading = true;
      break;
    case LOAD_SUBJECTS_SUCCESS:
      draft.subjects = action.data;
      draft.subjectsLoading = false;
      break;
    case LOAD_SUBJECTS_FAILURE:
      break;
    case ADD_MY_SUBJECTS_REQUEST:
      break;
    case ADD_MY_SUBJECTS_SUCCESS:
      draft.mysubjects.unshift(action.data.subject);
      draft.subjects = draft.subjects.filter((v) => v.suupNo !== action.data.subject.suupNo);
      break;
    case ADD_MY_SUBJECTS_FAILURE:
      break;
    case DELETE_MY_SUBJECTS_REQUEST:
      break;
    case DELETE_MY_SUBJECTS_SUCCESS:
      draft.mysubjects = draft.mysubjects.filter((v) => v.suupNo !== action.data.suupNo);
      break;
    case DELETE_MY_SUBJECTS_FAILURE:
      break;
    case LOAD_MY_SUBJECTS_REQUEST:
      break;
    case LOAD_MY_SUBJECTS_SUCCESS:
      draft.mysubjects = action.data.subjects;
      break;
    case LOAD_MY_SUBJECTS_FAILURE:
      break;
    default:
      break;
  }
});

export default reducer;
