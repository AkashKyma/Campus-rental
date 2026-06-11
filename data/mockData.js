export const categories = ['Books', 'Calculators', 'Electronics', 'Lab Gear', 'Sports', 'Other'];

export const listings = [
  {
    id: 1,
    title: 'Casio FX-991ES Plus Calculator',
    category: 'Calculators',
    campus: 'North Campus',
    city: 'Delhi',
    pricePerDay: 35,
    deposit: 300,
    distanceKm: 0.8,
    rating: 4.8,
    owner: 'Aarav S.',
    availableFrom: '2026-06-12',
    availableTo: '2026-06-30',
    image: '🧮',
    description: 'Ideal for engineering maths and exam prep. Pickup near library gate.'
  },
  {
    id: 2,
    title: 'Engineering Mechanics Textbook',
    category: 'Books',
    campus: 'South Campus',
    city: 'Delhi',
    pricePerDay: 25,
    deposit: 200,
    distanceKm: 1.6,
    rating: 4.7,
    owner: 'Nisha R.',
    availableFrom: '2026-06-11',
    availableTo: '2026-07-10',
    image: '📘',
    description: 'Clean notes included. Great for first-year mech students.'
  },
  {
    id: 3,
    title: 'Portable Projector for Presentations',
    category: 'Electronics',
    campus: 'Tech Park Hostel',
    city: 'Bengaluru',
    pricePerDay: 180,
    deposit: 1200,
    distanceKm: 2.4,
    rating: 4.9,
    owner: 'Rahul K.',
    availableFrom: '2026-06-14',
    availableTo: '2026-06-28',
    image: '📽️',
    description: 'Compact projector with HDMI cable. Best for club demos and project reviews.'
  }
];

export const requests = [
  { id: 'REQ-204', itemTitle: 'Casio FX-991ES Plus Calculator', renter: 'Priya M.', startDate: '2026-06-14', endDate: '2026-06-17', status: 'Requested' },
  { id: 'REQ-205', itemTitle: 'Portable Projector for Presentations', renter: 'Dev P.', startDate: '2026-06-16', endDate: '2026-06-18', status: 'Approved' },
  { id: 'REQ-206', itemTitle: 'Engineering Mechanics Textbook', renter: 'Sana L.', startDate: '2026-06-11', endDate: '2026-06-12', status: 'Active' }
];

export const adminFlags = [
  { id: 'FLAG-88', subject: 'Listing photo unclear', target: 'Engineering Mechanics Textbook', severity: 'Medium' },
  { id: 'FLAG-89', subject: 'Late return dispute', target: 'Portable Projector for Presentations', severity: 'High' }
];
