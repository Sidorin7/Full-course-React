import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BootstrapTest from './BootstrapTest';

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BootstrapTest/>
  </React.StrictMode>
);
