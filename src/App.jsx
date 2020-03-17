import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store'
import Header from './posts/components/header';
import MainContent from './posts/components/main-content';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;