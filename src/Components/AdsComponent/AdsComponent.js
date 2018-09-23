import React, { Component } from 'react';
import iPhoneAd from './iPhoneAd.jpg';
import AdobeAd from './AdobeAd.jpg'
import StudentAd from './Student.jpg'
import './Style.css';
import { Link } from "react-router-dom";

class AdsComponent extends Component {
  render() {
    return (
      <div className="Ads">
        <div className="Ad1">
          <a href="https://www.apple.com/ca/?afid=p238%7CsSxrMmytI-dc_mtid_1870765e38482_pcrid_230518082820_&cid=aos-CA-kwGO-brand--slid--product-">
            <img src={iPhoneAd} alt="iPhone Ad"/>
          </a>
          <div className = "CaptionText">Make the move</div>
        </div>
        <div className = "Ad1">
          <a href="https://www.adobe.com/products/xd.html?sdid=7JJ16HR2&mv=display">
            <img src={AdobeAd} alt="Adobe XD Ad"/>
          </a>
          <div className = "CaptionText">The future of experience design. Now free!</div>
        </div>
        <div className="Ad1">
          <a href="http://pages.act.org/canada-registration.html">
            <img src={StudentAd} alt="Student Ad"/>
          </a>
          <div className = "CaptionText">ACT Student. Register Now</div>
        </div>
        <button className="chat-btn">Live Chat!</button>
      </div>
    )
  }
}

export default AdsComponent;
