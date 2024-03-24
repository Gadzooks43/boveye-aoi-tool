// Header.js
import React from 'react';
import boveyeLogo from "../boveye_logo.png";

const searchStyle = {display: 'flex', margin: 'auto', padding: '10px 10px', marginTop: '30px'};
const searchInputStyle = {margin: 'auto', display: 'block', padding: '10px 10px'}
const searchButtonStyle = {margin: 'auto', display: 'block', padding: '10px 10px', marginLeft: '5px'};
const helpStyle = {margin: 'auto', display: 'block', padding: '10px 10px', marginRight: '300px', marginTop: '40px'};

const Header = ({ setMapCoordinateView }) => {
  const handleSearch = (string) => {
    // parse string to coordinates
    const parseCoordinates = (string) => {
      const coordinates = string.split(',');
      const lat = parseFloat(coordinates[0].trim());
      const lon = parseFloat(coordinates[1].trim());
      return [lon, lat];
    }
    const coordinates = parseCoordinates(string);
    // verify if coordinates are valid
    if (coordinates.length !== 2 || isNaN(coordinates[0]) || isNaN(coordinates[1])) {
      alert('Invalid coordinates');
      return;
    }
    setMapCoordinateView(coordinates);
    console.log('Search');
  }

  return (
    <header style={{display: 'flex'}}>
      <img className="logo" src={boveyeLogo} alt='Logo' style={{}}/> 
      <div style={searchStyle}>
        <input type="text" placeholder="SEARCH WITH COORDINATES" style={searchInputStyle}/>
        <button style={searchButtonStyle} onClick={() => {
          const input = document.querySelector('input');
          handleSearch(input.value);
          input.value = '';
          }}>Search</button>
      </div>
      <select style={helpStyle}>
        <option value="" disabled selected>HOW TO USE</option>
        <option value="1"disabled>LEFT CLICK TO ADD POINTS</option>
        <option value="2"disabled>RIGHT CLICK TO CLOSE A BOUNDARY</option>
        <option value="3"disabled>EXPORT TO SEND TO BOVEYE</option>
      </select>
    </header>
  );
};

export default Header;