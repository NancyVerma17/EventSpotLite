import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './styles/main.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EventList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
