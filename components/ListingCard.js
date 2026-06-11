export default function ListingCard({ listing }) {
  return (
    <article className="listingCard listingCardOlx">
      <div className="listingImageWrap">
        <img src={listing.image} alt={listing.title} className="listingImage" />
      </div>
      <div className="listingBody">
        <div className="priceRow">
          <strong>₹{listing.pricePerDay}/day</strong>
          <span className="listingDistance">{listing.distanceKm.toFixed(1)} km away</span>
        </div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <div className="metaRow">
          <span>{listing.area}, {listing.city}</span>
          <span>Posted {listing.postedDate}</span>
        </div>
        <div className="metaRow">
          <span>{listing.campus}</span>
          <span>⭐ {listing.rating} • Deposit ₹{listing.deposit}</span>
        </div>
      </div>
    </article>
  );
}
