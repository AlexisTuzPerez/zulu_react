
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './clients/Client';
import Home from './home/Home.jsx';

import Stock from './stock/Stock';

import Product from './products/Product';
import './styles.css';
import Warehouse from './warehouse/Warehouse.jsx';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/products" element={<Product />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/warehouse" element={<Warehouse />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
