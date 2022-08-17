import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import './static/css/main.scss';

import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import TestPage from './pages/TestPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/research" element={<Research />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
