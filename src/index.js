import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  
);

 