import React, {useState} from 'react';
import "./intro.css";
import SignUp from './SignUp.js';

const Intro = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <div className="i" style={signUp === true ? {filter: 'blur(3px)'} : {color: 'black'}}>
          <div className="i-container">
              <div className="i-left-wrapper col-7">
                <h1 className="i-logo text-primary" >mySocial</h1>
                <h2>mySocial helps you connect and share with the people in your life.</h2>
              </div>
              <div className="i-right-wrapper col-5">
                <div className="i-right-container">
                  <input className="i-input" placeholder="Email address"></input>
                  <input className="i-input" placeholder="Password"></input>
                  <button type="button" class="i-btn btn btn-primary">Log in</button>
                  <hr className="i-hr"></hr>
                  <button type="button" class="i-btn btn btn-success" onClick={() => setSignUp(true)}>Create New Account</button>
                </div>
              </div>
          </div>
      </div>
      {signUp === true && (<div className="sign-up-container">
        <SignUp signUp={signUp} setSignUp={setSignUp}/>
      </div>)}
    </>
  )
}

export default Intro