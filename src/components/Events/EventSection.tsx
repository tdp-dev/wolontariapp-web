import React from 'react';
import EventList from './EventList';
import Button from '@components/Button';

export default function EventSection() {
  return (
    <div className="event-section">
      <div className="event-section__header">
        <h2 className="event-section__title">Twoje wydarzenia</h2>
        <div className="event-section__button">
          <Button content="Dodaj nowe"></Button>
        </div>
      </div>

      <div className="event-section__list">
        <EventList></EventList>
      </div>
    </div>
  );
}
