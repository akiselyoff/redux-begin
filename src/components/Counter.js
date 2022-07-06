import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

//делает map redux state и записывает объект пропсов c state в  компонент Counter
const mapStateToProps = state => {
  return {
    value: state.counterValue,
    xProps: state.x,
  };
};
//делает map redux dispatch и записывает объект методов как пропсы в  компонент Counter
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(10)),
    onDecrement: () => dispatch(actions.decrement(3)),
  };
};

//подписывает компонент Counter следить за store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
