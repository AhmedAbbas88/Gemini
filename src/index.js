import React from 'react';
import ReactDOM from 'react-dom/client';
import'@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './context/Context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>

    <App />

  </ContextProvider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
