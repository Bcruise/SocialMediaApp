import React from 'react';
import './Advertisements.css';
import Untitled from "./Untitled.png";
import CryptoUntitled from "./CryptoUntitled.png";
import Group from './Group.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Advertisements = () => {
  return (
    <div className="col-3">
        <span className="ad-sponsored">Sponsored</span>
        <div className="project-one">
            <a href="https://bcruise.github.io/ECommerceSite/" style={{textDecoration: 'none'}}>
                <img src={Untitled} alt="Image" className="ad-product-image-one"></img>
            </a>
            <div className="project-one-text">
                <span className="project-one-text-one">BUY your summer clothes Now!</span>
                <span className="project-one-text-two">https://bcruise.github.io/
                ECommerceSite</span>
            </div>
        </div>
        <div className="project-two">
            <a href="https://bcruise.github.io/CryptoPrices/" style={{textDecoration: 'none'}}>
                <img src={CryptoUntitled} alt="Image" className="ad-product-image-two"></img>
            </a>
            <div className="project-two-text">
                <span className="project-two-text-one">Check Crypto Prices</span>
                <span className="project-two-text-two">https://bcruise.github.io/
                CryptoPrices</span>
            </div>
        </div>
        <Group />
        <div className="a-add-message">
            <FontAwesomeIcon className="a-icons-message" icon={faMessage} ></FontAwesomeIcon>
        </div>
    </div>
  )
}

export default Advertisements