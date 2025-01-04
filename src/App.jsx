import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Client from './clients/Client';

import Stock from './stock/Stock';

import Product from './products/Product';
import './styles.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/products" element={<Product />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
