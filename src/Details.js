import React from 'react';
import './Details.css';

export default function Details(){
return (
    <div className="Details">
      <div className="details-info">
        <h3 id="date">Friday, March 26 2021 | 21:24</h3>
        <h5 id="description">clear sky</h5>
        <ul>
          <i className="fas fa-cloud-showers-heavy"></i>
          <li id="precipitation">Precipitation: 1%</li>
          <i className="fas fa-tint"></i>
          <li id="humidity">Humidity: 51%</li>
          <i className="fas fa-wind"></i>
          <li id="wind">Wind: 3km/hr</li>
          <i className="fas fa-temperature-high"></i>
          <li id="feels-like">Feels like: 10°C</li>
        </ul>
      </div>
    </div>
  );
  
}