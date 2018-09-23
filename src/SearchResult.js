import React, { Component } from 'react';
import './SearchResult.css';
import SearchEntry from './Components/SearchEntryComponent/SearchEntry';
import MainLayout from './MainLayout';
import houseImg1 from './images/brick-house-299767_1920.jpg';

const SearchResult = (props = {}) => {

    return (
        <div className="result-div">
        	<MainLayout location="SearchResult">
        		<SearchEntry 
        			locationImg={houseImg1} locationName="123 River Creek" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
        		</SearchEntry>
        		<SearchEntry 
        			locationImg={houseImg1} locationName="456 Bobshed Road" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
        		</SearchEntry>
        	</MainLayout>
        </div>
    )
};


export default SearchResult;

