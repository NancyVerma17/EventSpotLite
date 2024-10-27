import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import eventsData from '../data/events.json';

const EventList = ({ searchQuery }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="event-list">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
      ))}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventList;
