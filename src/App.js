// import React, { Suspense } from 'react';
import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import './static/css/main.scss';

// import Main from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    {/* <Suspense fallback={<Main />}> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/research" element={<Research />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<NotFound />} />
    </Routes>
    {/* </Suspense> */}
  </BrowserRouter>
);

export default App;
