import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Balance from './Components/Balance';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import Navigation from './Components/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/balance' element={<Balance />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/invoices' element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

