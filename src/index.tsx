import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'; 
import Navegation from './Components/Navegation';
import Footer from './Components/Footer';
import { CartProvider } from './Contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Navegation />
        <App />    
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

