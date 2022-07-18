import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import Navbar from './Navbar.js';

const Profile = ({whichPage, setWhichPage}) => {
    console.log(whichPage)
    const [whichProfilePage, setWhichProfilePage] = useState(0);
  return (
    <>
    <Navbar whichPage={whichPage} setWhichPage={setWhichPage}/>
        <div className="profile-container bg-white">
            <div className="profile-nav">
                <div className="p-username">
                    <div className="p-image-circle bg-primary">
                        <FontAwesomeIcon className="p-icons-user" icon={faUser} ></FontAwesomeIcon>
                    </div>
                    <span className="p-span-username">Username</span>
                </div>
                <button className="p-edit-profile-button"><FontAwesomeIcon className="p-icons-pen" icon={faPen} ></FontAwesomeIcon>Edit Profile</button>
            </div>
            <hr />
            <div className="p-links-div">
                <span className={whichProfilePage === 0 ? "p-links-spans-blue" : "p-links-spans"} onClick={() => setWhichProfilePage(0)}>Posts</span>
                <span className={whichProfilePage === 1 ? "p-links-spans-blue" : "p-links-spans"} onClick={() => setWhichProfilePage(1)}>About</span>
                <span className={whichProfilePage === 2 ? "p-links-spans-blue" : "p-links-spans"} onClick={() => setWhichProfilePage(2)}>Friends</span>
                <span className={whichProfilePage === 3 ? "p-links-spans-blue" : "p-links-spans"} onClick={() => setWhichProfilePage(3)}>Photos</span>
                <span className={whichProfilePage === 4 ? "p-links-spans-blue" : "p-links-spans"} onClick={() => setWhichProfilePage(4)}>Videos</span>
                <span className={whichProfilePage === 5 ? "p-links-spans-blue" : "p-links-spans"} onClick={() => setWhichProfilePage(5)}>Check-ins</span>
            </div>
        </div>
    </>
  )
}

export default Profile