import React from 'react';
import SearchBar from '../SearchBarComponent/SearchBar';
import logo from './img/logo.png';
import './Style.css';

const HeaderComponent = (props = {}) => {
    const {
        location
    } = props;

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo png" />
            {location === "home"
                ? <SearchBar />
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