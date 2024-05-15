import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipes/recipesSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  </React.StrictMode>,
)
