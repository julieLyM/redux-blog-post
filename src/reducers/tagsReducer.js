import { ADD_TAGS } from '../actions/actionsTypes';

const tagsReducer = (state = [], { type, payload }) => {
  if (type === ADD_TAGS) {
    return [...state, ...payload];
  } else {
    return state;
  }
};

export default tagsReducer;
