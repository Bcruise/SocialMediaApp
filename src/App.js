import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Intro from './Intro.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Profile from './Profile.js';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';


function App() {
  const [whichPage, setWhichPage] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home whichPage={whichPage} setWhichPage={setWhichPage}/>} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Profile" element={<Profile whichPage={whichPage} setWhichPage={setWhichPage}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
