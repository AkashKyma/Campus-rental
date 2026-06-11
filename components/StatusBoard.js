import { adminFlags, requests } from '../data/mockData';

export default function StatusBoard() {
  return (
    <section className="dashboardGrid">
      <article className="panel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Rental lifecycle</p>
            <h2>Current requests</h2>
          </div>
        </div>
        <ul className="statusList">
          {requests.map((request) => (
            <li key={request.id}>
              <div>
                <strong>{request.itemTitle}</strong>
                <p>{request.renter} • {request.startDate} to {request.endDate}</p>
              </div>
              <span className={`status status${request.status}`}>{request.status}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="panel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Admin moderation</p>
            <h2>Reported items</h2>
          </div>
        </div>
        <ul className="statusList">
          {adminFlags.map((flag) => (
            <li key={flag.id}>
              <div>
                <strong>{flag.subject}</strong>
                <p>{flag.target}</p>
              </div>
              <span className="chip">{flag.severity}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
