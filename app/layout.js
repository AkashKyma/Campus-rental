import './globals.css';

export const metadata = {
  title: 'CampusRent',
  description: 'Peer-to-peer student rental marketplace for nearby campus items.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
