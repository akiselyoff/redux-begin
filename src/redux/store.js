import { createStore } from 'redux';

const initialState = { counterValue: 10, x: 25 }; //replace state in Counter

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return { counterValue: state.counterValue + payload }; //replace handleIncrement in Counter

    case 'counter/Decrement':
      return { counterValue: state.counterValue - payload }; //replace handleDecrement in Counter
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
