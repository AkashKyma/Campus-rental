'use client';

import { areaOptions } from '../data/mockData';

export default function Header({ location, onLocationChange, query, onQueryChange }) {
  const handleAreaChange = (event) => {
    const area = event.target.value;
    const match = areaOptions.find((option) => option.name === area);
    onLocationChange({
      city: 'Patna',
      area,
      coords: match ? { lat: match.lat, lng: match.lng } : null
    });
  };

  const useMyLocation = () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      onLocationChange({
        city: 'Patna',
        area: 'Patna',
        coords: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  };

  return (
    <header className="topbarWrap">
      <div className="topbar">
        <div className="brandBlock">
          <div className="brandLogo">CR</div>
          <div>
            <strong>CampusRent</strong>
            <p>Patna student rentals</p>
          </div>
        </div>

        <select value={location.area} onChange={handleAreaChange} className="locationSelect" aria-label="Select area">
          <option value="Patna">Patna</option>
          {areaOptions.map((option) => (
            <option key={option.name} value={option.name}>{option.name}</option>
          ))}
        </select>

        <div className="searchWrap">
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Find books, calculators, projectors..."
            className="searchBar"
          />
        </div>

        <button type="button" className="ghostButton" onClick={useMyLocation}>Use my location</button>
        <button type="button" className="ghostButton">Login</button>
        <button type="button" className="primaryButton">+ List Item</button>
      </div>
    </header>
  );
}
