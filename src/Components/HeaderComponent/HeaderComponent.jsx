import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBarComponent/SearchBar';
import logo from './img/logo.png';
import './Style.css';

const HeaderComponent = (props = {}) => {
    const {
        location
    } = props;

    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="logo png" height="130px" width="240px" />
            </Link>
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