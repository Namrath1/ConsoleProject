import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConsoleContextProvider from './components/Context/ContextProvider.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConsoleContextProvider>
     <App/>
    </ConsoleContextProvider>
  </React.StrictMode>,
)
