import React from 'react';
import logo from './img/logo.png';
import './Style.css';

const HeaderComponent = (props = {}) => {
    const {
        location
    } = props;

    return (
        <div class="header">
            <img class="logo" src={logo} alt="logo png" />
            {location !== "home"
                ? <div class="search">
                    <input class="search-bar" type="text" name="search" />
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