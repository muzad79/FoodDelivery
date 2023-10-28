import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TokenProvider from '../context/tokenContext.jsx'
import CartProvider from '../context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <TokenProvider>
    <App />
    </TokenProvider>
    </CartProvider>
  </React.StrictMode>,
)
