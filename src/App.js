import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (  
      <><Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />

      {/* Add more routes for additional sections */}
    </Routes>
    <Footer /></>
  );
}

export default App;
