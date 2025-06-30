// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/Store';
import Log from './components/Log';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/log" element={<Log />} />

      </Routes>
    </Router>
  );
}

export default App;