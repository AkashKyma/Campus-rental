'use client';

import { useEffect, useMemo, useState } from 'react';
import Filters from '../components/Filters';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import StatusBoard from '../components/StatusBoard';
import { areaOptions, categories, listings } from '../data/mockData';

const DEFAULT_AREA = 'Patna';

function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function getStoredLocation() {
  if (typeof window === 'undefined') return { city: 'Patna', area: DEFAULT_AREA, coords: null };
  try {
    const raw = window.localStorage.getItem('campusRentLocation');
    return raw ? JSON.parse(raw) : { city: 'Patna', area: DEFAULT_AREA, coords: null };
  } catch {
    return { city: 'Patna', area: DEFAULT_AREA, coords: null };
  }
}

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');
  const [maxDistance, setMaxDistance] = useState('');
  const [location, setLocation] = useState({ city: 'Patna', area: DEFAULT_AREA, coords: null });

  useEffect(() => {
    setLocation(getStoredLocation());
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('campusRentLocation', JSON.stringify(location));
    }
  }, [location]);

  const referenceCoords = useMemo(() => {
    if (location.coords) return location.coords;
    const areaMatch = areaOptions.find((option) => option.name === location.area);
    if (areaMatch) return { lat: areaMatch.lat, lng: areaMatch.lng };
    return { lat: 25.5941, lng: 85.1376 };
  }, [location]);

  const filteredListings = useMemo(() => {
    return listings
      .map((listing) => ({
        ...listing,
        distanceKm: haversineDistance(referenceCoords.lat, referenceCoords.lng, listing.lat, listing.lng)
      }))
      .filter((listing) => {
        const matchesQuery = [listing.title, listing.description, listing.area, listing.campus]
          .join(' ')
          .toLowerCase()
          .includes(query.trim().toLowerCase());
        const matchesCategory = selectedCategory === 'All' || listing.category === selectedCategory;
        const matchesPrice = !maxPrice || listing.pricePerDay <= Number(maxPrice);
        const matchesDistance = !maxDistance || listing.distanceKm <= Number(maxDistance);
        const matchesArea = location.area === 'Patna' || listing.area === location.area;
        const matchesCity = listing.city === location.city;
        return matchesQuery && matchesCategory && matchesPrice && matchesDistance && matchesArea && matchesCity;
      })
      .sort((a, b) => a.distanceKm - b.distanceKm || a.pricePerDay - b.pricePerDay);
  }, [query, selectedCategory, maxPrice, maxDistance, location, referenceCoords]);

  return (
    <main className="pageShell">
      <Header
        location={location}
        onLocationChange={setLocation}
        query={query}
        onQueryChange={setQuery}
      />

      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        maxDistance={maxDistance}
        onMaxDistanceChange={setMaxDistance}
      />

      <section className="categoryRail" aria-label="Category shortcuts">
        <button type="button" className={selectedCategory === 'All' ? 'chip chipActive' : 'chip'} onClick={() => setSelectedCategory('All')}>All</button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'chip chipActive' : 'chip'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="resultsHeader">
        <div>
          <p className="eyebrow">Patna rentals</p>
          <h2>{filteredListings.length} items near {location.area === 'Patna' ? 'Patna' : location.area}</h2>
        </div>
      </section>

      <section className="listingGrid olxGrid">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>

      <StatusBoard />
    </main>
  );
}
