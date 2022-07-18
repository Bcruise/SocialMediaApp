import React, {useState} from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { buildQueries } from '@testing-library/react';

const SignUp = ({signUp, setSignUp}) => {
    const [firstName, setFirstName] = useState('')

    const OptionsNow = () => {
        const arr = [];
      
        const startYear = 1900;
        const endYear = new Date().getFullYear();
      
        for (let i = endYear; i >= startYear; i--) {
          arr.push(<option value={i}>{i}</option>);
        }
      
        return arr;
      };

      const MonthOptions = () => {
        return <><option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option></>
      }

      const DayOptionsNow = () => {
        const arr = [];
      
        for (let i = 1; i <= 31; i++) {
          arr.push(<option value={i}>{i}</option>);
        }
      
        return arr;
      };


  return (
        <div className="su-container" style={{filter: 'blur(0px)'}}>
            <div className="su-wrapper m-3">
                <FontAwesomeIcon className="su-xmark text-secondary" icon={faXmark} onClick={() => setSignUp(false)}></FontAwesomeIcon>
                <h2>Sign Up</h2>
                <span className="text-secondary">It's quick and easy.</span>
                <hr className="su-hr"></hr>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input className="su-name-inputs my-2 p-2" placeholder="First Name" value={firstName} onChange={(e) => {const set = e.target.value; setFirstName(set)}}></input>
                    <input className="su-name-inputs my-2 p-2" placeholder="Surname"></input>
                </div>
                <input className="su-detail-inputs my-2 p-2" placeholder="Mobile number or email address"></input>
                <input className="su-detail-inputs my-2 p-2" placeholder="New password"></input>
                <div className="my-2">
                    <span className="su-small-text text-secondary">Date of birth?</span>
                    <div className="su-selects-main-div">
                        <select className="su-selects-div p-1"><DayOptionsNow /></select>
                        <select className="su-selects-div p-1"><MonthOptions /></select>
                        <select className="su-selects-div p-1"><OptionsNow /></select>
                    </div>
                </div>
                <div>
                    <span className="su-small-text text-secondary">Gender?</span>
                    <div className="su-radios-main-div">
                        <div className="su-radios-div p-1"><span>Female</span><input type="radio" name="gender-radios"></input></div>
                        <div className="su-radios-div p-1"><span>Male</span><input type="radio" name="gender-radios"></input></div>
                        <div className="su-radios-div p-1"><span>Custom</span><input type="radio" name="gender-radios"></input></div>
                    </div>
                </div>
                <span className="su-details text-secondary my-2">People who use our service may have uploaded your contact information to Facebook. Learn more.</span>
                <span className="su-details text-secondary my-2">By clicking Sign Up, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</span>
                <button className="btn btn-success" >Sign Up</button>
            </div>
        </div>
  )
}

export default SignUp