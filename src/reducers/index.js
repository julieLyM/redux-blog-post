import { combineReducers } from 'redux';

import postReducer from './postsReducer';
import tagsReducer from './tagsReducer';

export default combineReducers({
  posts: postReducer,
  tags: tagsReducer,
});
