export default function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  maxDistance,
  onMaxDistanceChange
}) {
  return (
    <section className="filterBar panel">
      <div className="filterControl">
        <label htmlFor="category-filter">Category</label>
        <select id="category-filter" value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="All">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="filterControl">
        <label htmlFor="price-filter">Max price/day</label>
        <input
          id="price-filter"
          type="number"
          min="0"
          placeholder="e.g. 150"
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(event.target.value)}
        />
      </div>

      <div className="filterControl">
        <label htmlFor="distance-filter">Max distance (km)</label>
        <input
          id="distance-filter"
          type="number"
          min="0"
          step="0.5"
          placeholder="e.g. 5"
          value={maxDistance}
          onChange={(event) => onMaxDistanceChange(event.target.value)}
        />
      </div>
    </section>
  );
}
