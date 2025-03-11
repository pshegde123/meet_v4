import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from 'atatus-spa';
atatus.config('83b01ee93c384802ae90f640f444f3d9').install();
atatus.notify(new Error('Test Atatus Setup'));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
