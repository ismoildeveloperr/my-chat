import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/redux-store'; // путь к твоему store
import App from './App';

test('App renders without crashing', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
  );
});
