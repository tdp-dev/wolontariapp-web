import React from 'react';
import EventCard from './EventCard';

export default function EventList() {
  return (
    <div className='event-list'>
      <EventCard></EventCard>
      <EventCard></EventCard>
      <EventCard></EventCard>
      <EventCard></EventCard>
    </div>
  );
}
