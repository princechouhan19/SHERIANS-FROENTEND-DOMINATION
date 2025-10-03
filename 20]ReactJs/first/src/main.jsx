import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './STORE/App';
import Context from './STORE/Utils/Context';
 import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Context>
);