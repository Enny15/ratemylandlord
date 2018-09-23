import React from 'react';
import Header from './Components/HeaderComponent/HeaderComponent';
import Filter from './Components/FilterComponent/FilterComponent';
import './MainLayout.css';

const MainLayout = (props = {}) => {
    const {
        location,
        children
    } = props;

    return (
        <div className="main_layout">
            <Header location={location} />
            <div className="main_body">
                <Filter />
                {children}
                <div>ads</div>
            </div>
        </div>
    )
};

export default MainLayout;