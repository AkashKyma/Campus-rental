export default function ListingCard({ listing }) {
  return (
    <article className="listingCard">
      <div className="listingIcon" aria-hidden="true">{listing.image}</div>
      <div className="listingBody">
        <div className="listingTopRow">
          <span className="chip">{listing.category}</span>
          <span>{listing.distanceKm} km away</span>
        </div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <div className="metaRow">
          <span>{listing.campus}, {listing.city}</span>
          <span>⭐ {listing.rating}</span>
        </div>
        <div className="metaRow">
          <span>Owner: {listing.owner}</span>
          <span>{listing.availableFrom} → {listing.availableTo}</span>
        </div>
      </div>
      <div className="pricePanel">
        <strong>₹{listing.pricePerDay}/day</strong>
        <span>Deposit ₹{listing.deposit}</span>
        <button type="button">Request rental</button>
      </div>
    </article>
  );
}
