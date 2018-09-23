import React, { Component } from 'react';
import './SearchResult.css';
import SearchEntry from './Components/SearchEntryComponent/SearchEntry';
import MainLayout from './MainLayout';
import houseImg1 from './images/architecture-1836070_1920.jpg';
import houseImg2 from './images/brick-house-299767_1920.jpg';

const SearchResult = (props = {}) => {

    return (
        <div className="result-div">
        	<MainLayout location="SearchResult">
        	<div className="result-row">
        		<SearchEntry 
        			locationImg={houseImg2} locationName="123 River Creek" description="Magnificent rental opportunity, minutes to the downtown core. This Urban oasis stays true to its Victorian roots and features high ceilings, crown moldings, decorative trim and the list goes on. The 4 floors of living space provide plenty of room and the second floor media room is sure to be a hit. Finished basement, bright and open kitchen, and a lovely garden.">
        		</SearchEntry>
        		<SearchEntry 
        			locationImg={houseImg1} locationName="456 Bobshed Road" description="House for Rent - 4 Bedrooms - North York, Markham, Richmond Hill. If you would like to lease/rent your house or Townhouse, please contact me. I always have a lot of qualified candidates.">
        		</SearchEntry>
        	</div>
        	</MainLayout>
        </div>
    )
};


export default SearchResult;

