import React, { useCallback, useEffect, useMemo, useState } from 'react';
import EventCard from './EventCard';
import API from 'src/helpers/apiConnector';

export default function EventList() {
  const [events, setEvents] = useState([]);

  const fetchEvents = useCallback(async () => {
    const { data } = await API.get('/events');
    setEvents(data);
  }, []);

  const eventCards = useMemo(() => {
    return events.map(({ id, title, description, image }) => <EventCard key={id} title={title} description={description} image={image} />);
  }, [events]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return <div className='event-list'>{eventCards}</div>;
}
