// import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// const Home = import('./pages/Home');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>hello</p>} />
      </Routes>
    </Router>
    // <div className="App">
    //   <p> hey </p>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
