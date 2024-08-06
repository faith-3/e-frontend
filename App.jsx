import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Nav';
import Cart from './components/MainComponent/Cart/Cart';
import Home from './components/MainComponent/Home/Home';
import About from './components/MainComponent/About/About';
import Footer from './components/MainComponent/Footer/Footer';
import Prefooter from './components/MainComponent/Prefooter/Prefooter';
import WishList from './components/MainComponent/WishList/WishList';
import CheckOut from './components/MainComponent/CheckOut/CheckOut';
import Contact from './components/MainComponent/Contact';
import Account from './components/MainComponent/Account';
import ProductDetails from './components/MainComponent/ProductDetails/ProductDetails';
import Land from './components/Landing/Land'
import Login from './components/User/Login'
import Signup from './components/User/Signup';
import CategoriesGrid from './components/MainComponent/Home/CategoriesGrid'
import CategoriesList from './components/MainComponent/Home/CategoriesList';
import Example from './components/MainComponent/Home/Search';
import TestimonialSlider from './Slider';
import Categories from './components/MainComponent/Home/Categories';
import NavAfter from './components/Navbar/Nav';
import Nav from './components/Navbar/NavAfter';


// Define a Layout component to include the Navbar and Outlet for nested routes
const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />  {/* Outlet renders the nested routes */}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Land/>} />
          <Route path="login" element={<Login />} /> 
          <Route path="home" element={<Land />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<WishList />} /> 
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
