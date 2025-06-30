// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Signin from './components/Signin';
import Top from './components/Top';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/top" element={<Top/>} />

      </Routes>
    </HashRouter>
  );
}

export default App;