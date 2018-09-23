import React from 'react';
import Header from './Components/HeaderComponent/HeaderComponent';
import Filter from './Components/FilterComponent/FilterComponent';
import './MainLayout.css';

const MainLayout = (props = {}) => {
    const {
        location
    } = props;

    return (
        <div className="main_layout">
            <Header location={location} />
            <div className="main_body">
                <Filter />
            </div>
        </div>
    )
};

export default MainLayout;