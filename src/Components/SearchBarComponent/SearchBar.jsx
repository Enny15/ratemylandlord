import React from 'react';
import './Style.css';

const SearchBar = () =>
    <div className="search">
        <input className="search-bar" type="text" name="search" placeholder="Search a place for reviews" />
    </div>;

export default SearchBar;