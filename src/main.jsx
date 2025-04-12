import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './Store.js'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import Nav from './component/Nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Nav/>
          <App />
        </Provider>
    </BrowserRouter>
  </StrictMode>,
)
