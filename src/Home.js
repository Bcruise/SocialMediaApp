import React from 'react';
import Options from './Options.js';
import Advertisements from './Advertisements';
import NewsFeed from './NewsFeed';
import './Home.css';
import Navbar from './Navbar.js';

const Home = ({whichPage, setWhichPage}) => {
  return (
    <>
      <Navbar whichPage={whichPage} setWhichPage={setWhichPage}/>
        <div className="h-container col-12 p-3">
            <Options />
            <NewsFeed />
            <Advertisements />
        </div>
    </>
  )
}

export default Home