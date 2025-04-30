import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // <-- Changed from BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* <-- Changed from BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();