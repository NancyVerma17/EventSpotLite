import React from 'react';

const Navbar = ({ searchQuery, setSearchQuery }) => (
  <nav className="navbar">
    <h1>EventSpot Lite</h1>
    <input
      type="text"
      placeholder="Search events"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </nav>
);

export default Navbar;
