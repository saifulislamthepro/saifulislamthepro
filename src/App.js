import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {speedInsights} from '@vercel/speed-insights/react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (  
     
      <><Header />
      <speedInsights/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

      {/* Add more routes for additional sections */}
    </Routes>
    <Footer/></>
  );
}

export default App;
