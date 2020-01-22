import { createStore } from 'redux';
import appReducer from '../reducers';
import { addPost } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(
  addPost({
    id: '1234',
    title: 'test1',
    description: 'je test le premier addpost',
    timestamp: '10AM',
    hashtags: ['food', 'sport', 'movie', 'family'],
  })
);

store.dispatch(
  addPost({
    id: '4567',
    title: 'test2',
    description: 'je test le deuxieme addpost',
    timestamp: '5PM',
    hashtags: ['food', 'sport'],
  })
);



export default store;
