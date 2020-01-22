import { CREATE_POST } from '../actions/actionsTypes';

const postReducer = (state = [], { type, payload }) => {
  if (type === CREATE_POST) {
    return [...state, payload];
  } else {
    return state;
  }
};

export default postReducer;
