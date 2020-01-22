import { CREATE_POST } from './actionsTypes';

export const addPost = post => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
