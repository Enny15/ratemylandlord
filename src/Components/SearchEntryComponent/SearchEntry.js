import React, { Component } from 'react';
import './Style.css';

const SearchEntry = (props = {}) => {
    const {
        locationImg, locationName, description
    } = props;

    return (
        <div className="entry-div">
            <img className="rent-img entry-item" src={locationImg} alt="img png" />
            <div className="descript">
                <p className="location entry-item">{locationName}</p>
                <p className="entry-item">{description}</p>
            </div>
        </div>
    )
};

export default SearchEntry;
