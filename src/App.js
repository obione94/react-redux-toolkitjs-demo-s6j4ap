import React from 'react';
import './style.css';
import { store } from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Bonjour tout le monde !</h1>
        <Counter />
      </div>
    </Provider>
  );
}
