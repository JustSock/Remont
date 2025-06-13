import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ui/sanitize.css'

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
