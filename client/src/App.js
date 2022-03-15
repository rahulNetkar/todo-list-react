import React from 'react'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<p>Page not found</p>} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
