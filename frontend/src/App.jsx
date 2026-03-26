import React from 'react';
// BrowserRouter aur Routes humein alag alag pages par navigate karne dete hain.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route define karta hai ki kis URL par kaunsa component dikhana hai */}
        {/* "/" ka matlab hai Home page */}
        <Route path="/" element={<Home />} />

        {/* Future routes yahan aayenge */}
        {/* <Route path="/gemstones" element={<GemstoneList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
