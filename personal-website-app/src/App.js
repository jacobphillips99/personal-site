import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/* look into lazy loading */
const Home = import('./pages/Home');

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                {/* <Route path="/about" component={About} />
                <Route path="/research" component={Research} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} /> */}
            </Routes>
        </Router>
    );
}

export default App;