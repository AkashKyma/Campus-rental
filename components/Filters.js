import { categories } from '../data/mockData';

export default function Filters() {
  return (
    <section className="panel">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">Discover nearby</p>
          <h2>Browse with practical filters</h2>
        </div>
      </div>
      <div className="filtersGrid">
        <label>
          Search
          <input type="text" placeholder="Calculator, textbook, projector" readOnly />
        </label>
        <label>
          Category
          <select defaultValue="All" disabled>
            <option>All</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label>
          Max price/day
          <input type="text" placeholder="₹200" readOnly />
        </label>
        <label>
          Distance
          <input type="text" placeholder="Within 3 km" readOnly />
        </label>
      </div>
      <p className="helperText">Demo UI only. Hook these controls to live search and geo-filtering next.</p>
    </section>
  );
}
