import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipes/recipesSlice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
  </Provider>
  </React.StrictMode>,
)
