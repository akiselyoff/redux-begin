import { createStore } from 'redux';

const reducer = (state = { a: 5 }, action) => {
  console.log('Log action in reducer: ', action);
  return state;
};

const store = createStore(reducer);

export default store;
