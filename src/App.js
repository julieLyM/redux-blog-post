import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Posts from './container/Posts';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
