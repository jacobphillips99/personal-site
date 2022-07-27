import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './pages/Home';
import {Helmet, HelmetProvider} from "react-helmet-async";


/* look into lazy loading */
// const Home = lazy(() => import('./pages/Home'));

const App = () => {
    return (
        <Router>
            {/* <Suspense fallback={<Main />}> */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/" element={<Home />} /> */}
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            {/* </Suspense> */}
        </Router>
    );
}

export default App;