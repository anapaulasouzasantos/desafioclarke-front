import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConsumptionProvider } from './contexts/ConsumptionContext'
import './index.css';
import Main from './pages/main';
window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConsumptionProvider>
      <Main/>
    </ConsumptionProvider>
  </React.StrictMode>,
)
