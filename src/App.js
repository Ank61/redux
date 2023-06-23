import React from 'react';
import { useDispatch, useSelector,Provider } from 'react-redux';
import { increment, decrement, incrementAsync } from './Slice/slice';
import store from './Store/store';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementAsync = () => {
    dispatch(incrementAsync());
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementAsync}>Increment Async</button>
    </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;