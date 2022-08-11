import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './static/css/main.scss';

import Main from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Work from './pages/Work';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;