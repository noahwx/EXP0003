import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/pages/Order' element={<Order />} />
      <Route exact path='/pages/Menu' element={<Menu />} />
      <Route exact path='/pages/ContactUs' element={<ContactUs />} />
    </Routes>
  );
}

export default Main;