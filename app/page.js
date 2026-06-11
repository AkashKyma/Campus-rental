import Filters from '../components/Filters';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import StatusBoard from '../components/StatusBoard';
import { listings } from '../data/mockData';

export default function HomePage() {
  return (
    <main className="pageShell">
      <Header />
      <Filters />
      <section className="panel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Nearby inventory</p>
            <h2>Featured listings near student hotspots</h2>
          </div>
          <span className="chip">{listings.length} live items</span>
        </div>
        <div className="listingGrid">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
      <StatusBoard />
      <section className="panel infoGrid">
        <article>
          <p className="eyebrow">Owner flow</p>
          <h2>List an item in under two minutes</h2>
          <ul>
            <li>Add title, category, photos, price/day, and deposit</li>
            <li>Set available dates and pickup area</li>
            <li>Approve or reject incoming rental requests</li>
            <li>Mark picked up and returned when complete</li>
          </ul>
        </article>
        <article>
          <p className="eyebrow">Trust layer</p>
          <h2>Start simple, expand later</h2>
          <ul>
            <li>Basic profiles with ratings</li>
            <li>Campus or city-based discovery</li>
            <li>Admin reporting and moderation queue</li>
            <li>Future-ready for payments and student verification</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
