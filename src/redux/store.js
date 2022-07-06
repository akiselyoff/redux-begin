import { createStore } from 'redux';

const initialState = { counterValue: 0 }; //replace state in Counter

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/Increment':
      return { counterValue: state.counterValue + 1 }; //replace handleIncrement in Counter
    case 'counter/Decrement':
      return { counterValue: state.counterValue - 1 }; //replace handleDecrement in Counter
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
