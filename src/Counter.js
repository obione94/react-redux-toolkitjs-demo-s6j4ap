import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';

const Counter = (props) => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Compteur: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
