import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  return (
    <div className="po-div-main mx-5 mt-2 p-2 bg-white">
      <div className="po-top pt-3">
          <div className="po-image-circle bg-primary">
            <Link to="/Profile" style={{textDecoration: 'none', color: 'black'}}><FontAwesomeIcon className="po-icons-user" icon={faUser} ></FontAwesomeIcon></Link>
          </div>
          <div className="po-span-div">
            <Link to="/Profile" className="po-top-username ms-2"><span>Username</span></Link>
            <span className="po-top-date ms-2">Today 4/5/2022</span>
          </div>
      </div>
      <div className="po-main-post m-3">
        <span >This is the main post here!!</span>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Posts