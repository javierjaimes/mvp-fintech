import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/AppContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
