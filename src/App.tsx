import React from 'react';
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;