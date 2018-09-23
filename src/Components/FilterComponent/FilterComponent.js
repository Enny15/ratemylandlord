import React, { Component } from 'react';
import './Style.css';

class FilterComponent extends Component {
  render() {
    return (
      <div className="FilterComponent">
        <p className="Filter-sidebar">
          <div class="sidenav">
            <p class="category">School:</p>
            <div class="sidebar-border">
              <a href="#">York University</a>
              <a href="#">University of Toronto</a>
              <a href="#">Ryerson University</a>
              <a href="#">Seneca College</a>
            </div>
          <p class="category">Location:</p>
            <div class="sidebar-border">
              <a href="#">Toronto (GTA)</a>
              <a href="#">City of Toronto</a>
            </div>
            <p class="category">Contract Length:</p>
            <div class="sidebar-border">
              <a href="#">4 month contract</a>
              <a href="#">8 month contract</a>
              <a href="#">12 month contract</a>
            </div>
            <p class="category"># of rooms available:</p>
            <div class="sidebar-border">
              <a href="#">1-3</a>
              <a href="#">4-6</a>
              <a href="#">6-8</a>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default FilterComponent;
