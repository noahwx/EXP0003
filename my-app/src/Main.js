import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Combos from './pages/Combos';
import Sides from './pages/Sides';
import Drinks from './pages/Drinks';
import Desserts from './pages/Desserts';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/pages/Menu' element={<Menu />} />
      <Route exact path='/pages/ContactUs' element={<ContactUs />} />
      <Route exact path='/pages/Combos' element={<Combos />} />
      <Route exact path='/pages/Sides' element={<Sides />} />
      <Route exact path='/pages/Drinks' element={<Drinks />} />
      <Route exact path='/pages/Desserts' element={<Desserts />} />
    </Routes>
  );
}

export default Main;