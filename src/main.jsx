import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration.js';

//atatus.config('83b01ee93c384802ae90f640f444f3d9').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
serviceWorkerRegistration.register();