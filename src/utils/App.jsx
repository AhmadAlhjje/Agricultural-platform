import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import Products from "../pages/Products";
// import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import AdminDashboard from "../pages/AdminDashboard";
import FarmerDashboard from "../pages/FarmerDashboard";
import NotFound from "../pages/NotFound";
import Navbar from "../components/layouts/Navbar";  
import Footer from "../components/layouts/Footer ";  
import './App.css'
import OwnerDashboard from "../pages/OwnerDashboard";


function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ يتم عرض Navbar في جميع الصفحات */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<OwnerDashboard/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />  {/* ✅ يتم عرض Footer في جميع الصفحات */}
    </Router>
  );
}

export default App;
