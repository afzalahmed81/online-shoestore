import React from 'react';
import './App.css';

import {Header} from './components/Header';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Products} from './components/Products';
import {ProductDetails} from './components/ProductDetails';
import {Home} from './components/Home';
import {NotFound} from './components/NotFound';
import {ProductIndex} from './components/ProductIndex';
import {AboutUs} from './components/AboutUs';
import {Contact} from './components/Contact';



function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="Home" element={<Home />}>  </Route>
          <Route path="products" element={<Products />}>  
              <Route path="/" element={<ProductIndex />}>  </Route>
              <Route path=":productID" element={<ProductDetails />} >  </Route>
          </Route>
          <Route path="AboutUs" element={<AboutUs />}> </Route>
          <Route path="Contact" element={<Contact />}> </Route>
          <Route path="*" element={<NotFound />} > </Route>
        </Routes>
    </Router>
  );
}

export default App;
