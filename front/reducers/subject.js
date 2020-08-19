import produce from '../util/produce';

export const initialState = {
  subjects: null,
};

export const LOAD_SUBJECTS_REQUEST = 'LOAD_SUBJECTS_REQUEST';
export const LOAD_SUBJECTS_SUCCESS = 'LOAD_SUBJECTS_SUCCESS';
export const LOAD_SUBJECTS_FAILURE = 'LOAD_SUBJECTS_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_SUBJECTS_REQUEST:
      break;
    case LOAD_SUBJECTS_SUCCESS:
      draft.subjects = action.data;
      break;
    case LOAD_SUBJECTS_FAILURE:
      break;
    default:
      break;
  }
});

export default reducer;
