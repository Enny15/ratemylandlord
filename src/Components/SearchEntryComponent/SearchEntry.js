import React, { Component } from 'react';
import './Style.css';

const SearchEntry = (props = {}) => {
    const {
        locationImg, locationName, description
    } = props;

    return (
        <div className="entry-div">
            <img className="rent-img entry-item" src={locationImg} alt="img png" />
            <p>{locationName}</p>
            <p>{description}</p>
        </div>
    )
};

export default SearchEntry;
