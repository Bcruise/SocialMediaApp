import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Options.css';

const Options = () => {
  return (
    <div className="col-3">
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user text-primary" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2">Username</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user text-secondary" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2">Find Friends</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user text-success" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2">Watch</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user text-danger" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2">Groups</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user text-warning" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2 ">Marketplace</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user text-info" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2">Memories</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user" icon={faUser} ></FontAwesomeIcon>
        <span className="o-contents-span ms-2 text-dark">Saved</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user" icon={faUser} style={{color: 'lightblue'}}></FontAwesomeIcon>
        <span className="o-contents-span ms-2">Pages</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user" icon={faUser} style={{color: 'purple'}}></FontAwesomeIcon>
        <span className="o-contents-span ms-2" >News</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user" icon={faUser} style={{color: 'orange'}}>></FontAwesomeIcon>
        <span className="o-contents-span ms-2" >Events</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user" icon={faUser} style={{color: 'gold'}}></FontAwesomeIcon>
        <span className="o-contents-span ms-2" >Most Recent</span>
      </div>
      <div className="o-contents-div">
        <FontAwesomeIcon className="o-icons-user" icon={faUser} style={{color: 'pink'}}></FontAwesomeIcon>
        <span className="o-contents-span ms-2" >Ad Center</span>
      </div>
    </div>
  )
}

export default Options