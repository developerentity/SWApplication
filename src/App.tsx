import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Index from './navigation/Index';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
