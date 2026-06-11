export default function Header() {
  return (
    <header className="hero">
      <div>
        <span className="badge">Campus-first rentals</span>
        <h1>Rent what you need from students nearby.</h1>
        <p>
          CampusRent helps students list, discover, and request short-term rentals for books,
          calculators, electronics, lab gear, and more.
        </p>
      </div>
      <div className="heroCard">
        <h2>Fast MVP flow</h2>
        <ol>
          <li>Set campus or city</li>
          <li>Browse nearby items</li>
          <li>Request rental dates</li>
          <li>Owner approves</li>
          <li>Pickup, return, and rate</li>
        </ol>
      </div>
    </header>
  );
}
