
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { ProductProvider } from "./components/productarray";
import Categories from './pages/showproduct';
import Products from './pages/productlist';
import AboutUs from './pages/Aboutus';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart';
import Navbar from './components/navbar';
import Announcement from './components/announcement';



const App = () => {
  return (
    <ProductProvider>
    <Router> 
      <Announcement/>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
       
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </Router></ProductProvider>
  );
}

export default App;
