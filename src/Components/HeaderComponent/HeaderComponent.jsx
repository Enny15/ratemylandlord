import React from 'react';
import logo from './img/logo.png';
import './Style.css';

const HeaderComponent = (props = {}) => {
    const {
        location
    } = props;

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo png" />
            {location !== "home"
                ? <div className="search">
                    <input className="search-bar" type="text" name="search" placeholder="Search a place for reviews" />
                </div>
                : null
            }
            <div>
                <button>
                    LOG IN / SIGN UP
        </button>
            </div>
        </div>
    )
};

export default HeaderComponent;