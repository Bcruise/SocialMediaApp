import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faGear, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Home from './Home.js';

const Navbar = ({whichPage, setWhichPage}) => {
    console.log(whichPage)
  return (
    <>
        <nav className="navbar bg-white p-3">
            <div className="n-div-one col-4">
                <Link to="/" style={{textDecoration: 'none'}}><span className="n-logo text-primary">mySocial</span></Link>
                <input className="n-input" placeholder="Search mySocial"></input>
            </div>
            <div className="n-div-two col-4">
                <FontAwesomeIcon style={whichPage === 0 ? {color: 'rgb(13, 110, 253)'} : {color: 'black'}} className="n-icons-house" icon={faHouse} onClick={() => setWhichPage(0)}></FontAwesomeIcon>
                <FontAwesomeIcon style={whichPage === 1 ? {color: 'rgb(13, 110, 253)'} : {color: 'black'}} className="n-icons-user-group" icon={faUserGroup} onClick={() => setWhichPage(1)}></FontAwesomeIcon>
                <FontAwesomeIcon style={whichPage === 2 ? {color: 'rgb(13, 110, 253)'} : {color: 'black'}} className="n-icons-gear" icon={faGear} onClick={() => setWhichPage(2)}></FontAwesomeIcon>
            </div>
            <div className="n-div-three col-4">
                <Link to="/Profile" style={{textDecoration: 'none', color: 'black'}} onClick={() => setWhichPage(3)}><span>Username</span></Link>
                <div className="n-image-circle bg-primary">
                <Link to="/Profile" style={{textDecoration: 'none', color: 'black'}} onClick={() => setWhichPage(3)}><FontAwesomeIcon className="n-icons-user" icon={faUser} ></FontAwesomeIcon></Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar