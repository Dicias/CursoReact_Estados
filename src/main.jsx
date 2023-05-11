import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import Anecdota from './Anecdotas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Anecdota />
  </React.StrictMode>,
)
