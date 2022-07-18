import React from 'react';
import './NewsFeed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import Posts from './Posts.js';

const NewsFeed = () => {
  return (
    <div className="col-6" >
      <div className="nf-input-div-div mx-5">
        <div className="nf-input-div p-3">
            <div className="nf-image-circle bg-primary">
              <FontAwesomeIcon className="nf-icons-user" icon={faUser} ></FontAwesomeIcon>
            </div>
            <input className="nf-input ps-2 ms-4" placeholder="What's on your mind, Username?"></input>
            <FontAwesomeIcon className="nf-paper-plane" icon={faPaperPlane} ></FontAwesomeIcon>
        </div>
        <hr className="nf-hr mx-5"></hr>
        <div className="nf-icon-span-div mx-5">
          <div className="col-4">
            <FontAwesomeIcon className="nf-icon-one" icon={faUser} ></FontAwesomeIcon>
            <span className="nf-icon-span">Live Video</span>
          </div>
          <div className="col-4">
            <FontAwesomeIcon className="nf-icon-two" icon={faUser} ></FontAwesomeIcon>
            <span className="nf-icon-span">Photo/Video</span>
          </div>
          <div className="col-4">
            <FontAwesomeIcon className="nf-icon-three" icon={faUser} ></FontAwesomeIcon>
            <span className="nf-icon-span">Feeling/Activity</span>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default NewsFeed