import React, { Component } from 'react';
import './Style.css';

class FilterComponent extends Component {
  render() {
    return (
      <div className="FilterComponent">
        <div className="Filter-sidebar">
          <div className="sidenav">
            <p className="category">School</p>
            <div className="sidebar-border">
            <div className="filter-div">
              <a href="#">York University</a>
              <a href="#">University of Toronto</a>
              <a href="#">Ryerson University</a>
              <a href="#">Seneca College</a>
              </div>
            </div>
          <p className="category">Location</p>
            <div className="sidebar-border">
            <div className="filter-div">
              <a href="#">Toronto (GTA)</a>
              <a href="#">City of Toronto</a>
            </div>
            </div>
            <p className="category">Contract Length</p>
            <div className="sidebar-border">
            <div className="filter-div">
              <a href="#">4 month contract</a>
              <a href="#">8 month contract</a>
              <a href="#">12 month contract</a>
            </div>
            </div>
            <p className="category"># of rooms available</p>
            <div className="sidebar-border">
            <div className="filter-div">
              <a href="#">1-3</a>
              <a href="#">4-6</a>
              <a href="#">6-8</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterComponent;
